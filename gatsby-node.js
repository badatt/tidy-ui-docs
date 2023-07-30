const path = require(`path`);
const slugify = require(`@sindresorhus/slugify`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ getNode, node, trailingSlash: false });
    createNodeField({
      name: `slug`,
      node,
      value: slug
        .split('/')
        .map((s) => slugify(s))
        .join('/'),
    });
    createNodeField({
      name: `pageSourcePath`,
      node,
      value: `${slug}.mdx`,
    });
  }
};

const docTemplate = path.resolve(`${path.resolve(__dirname, 'src')}/templates/doc.jsx`);
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          body
          frontmatter {
            class
            component
            description
            package
            title
          }
          fields {
            slug
            pageSourcePath
          }
          internal {
            contentFilePath
          }
        }
      }
      site {
        siteMetadata {
          docs {
            contentPath
            githubLink
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const { allMdx, site } = result.data;

  const {
    docs: { contentPath, githubLink },
  } = site.siteMetadata;

  const componentNodes = allMdx.nodes;
  componentNodes.forEach((node) => {
    const {
      fields: { pageSourcePath, slug },
      internal: { contentFilePath },
    } = node;
    const pageSourceUrl = `${githubLink}${contentPath}${pageSourcePath}`;
    const slugs = slug.split('/');
    slugs.shift();
    const breadcrumb = [
      {
        name: slugs[0],
        path: `/${slugs[0]}`,
      },
      {
        name: slugs[1],
        path: `/${slugs[0]}/${slugs[1]}`,
      },
    ];
    createPage({
      component: `${docTemplate}?__contentFilePath=${contentFilePath}`,
      context: { breadcrumb, id: node.id, pageSourceUrl: encodeURI(pageSourceUrl), slug, slugs },
      path: slug,
    });
  });
};
