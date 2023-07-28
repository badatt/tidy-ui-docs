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
  }
};

const componentTemplate = path.resolve(`${path.resolve(__dirname, 'src')}/templates/Component.jsx`);
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
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const componentNodes = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  componentNodes.forEach((node) => {
    createPage({
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${componentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, slug: node.fields.slug },
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.fields.slug,
    });
  });
};
