const path = require(`path`);
const slugify = require(`@sindresorhus/slugify`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);
const readingTime = require(`reading-time`);
const _ = require(`lodash`);
const jd = require(`./src/utils/jd`);

function createBreadCrumb(slug) {
  const slugs = slug.split('/');
  slugs.shift();
  return [
    {
      name: slugs[0],
      path: `/${slugs[0]}`,
    },
    {
      name: slugs[1],
      path: `/${slugs[0]}/${slugs[1]}`,
    },
  ];
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node { 
      remote: File @link(from: "fields.localFile")
    }
  `);

  createTypes(`
    type Mdx implements Node { 
      npmLibBadge: File @link(from: "fields.npmLibBadgeFile")
      sourceBadge: File @link(from: "fields.sourceBadgeFile")
    }
  `);
};

exports.onCreateNode = async ({ node, actions, createNodeId, getCache, getNode }) => {
  const { createNode, createNodeField } = actions;

  /**
   * Customizing Mdx nodes
   */
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ getNode, node, trailingSlash: false });

    createNodeField({
      name: `slug`,
      node,
      value: _.split(slug, '/')
        .map((s) => slugify(s))
        .join('/'),
    });

    createNodeField({
      name: `pageSourcePath`,
      node,
      value: `${slug}.mdx`,
    });

    createNodeField({
      name: `timeToRead`,
      node,
      value: readingTime(node.body),
    });

    createNodeField({
      name: `breadcrumb`,
      node,
      value: createBreadCrumb(slug),
    });

    if (node.frontmatter.lib && node.frontmatter.lib !== null) {
      const npmLibBadgeFile = await createRemoteFileNode({
        createNode,
        createNodeId,
        ext: `.svg`,
        getCache,
        parentNodeId: node.id,
        url: `https://img.shields.io/npm/v/${node.frontmatter.lib}`,
      });
      if (npmLibBadgeFile) {
        createNodeField({ name: 'npmLibBadgeFile', node, value: npmLibBadgeFile.id });
      }

      const sourceBadgeFile = await createRemoteFileNode({
        createNode,
        createNodeId,
        ext: `.svg`,
        getCache,
        parentNodeId: node.id,
        url: `https://img.shields.io/badge/source-${node.frontmatter.component}-DarkGreen?logo=github`,
      });
      if (npmLibBadgeFile) {
        createNodeField({ name: 'sourceBadgeFile', node, value: sourceBadgeFile.id });
      }

      createNodeField({
        name: `componentInterfaces`,
        node,
        value: jd(node.frontmatter.component),
      });

      createNodeField({
        name: `component`,
        node,
        value: node.frontmatter.component,
      });
    }
  }

  /**
   * Customizing MarkdownRemark nodes
   */
  if (node.internal.type === 'MarkdownRemark' && node.frontmatter.url && node.frontmatter.url !== null) {
    const fileNode = await createRemoteFileNode({
      createNode,
      createNodeId,
      ext: `.svg`,
      getCache,
      parentNodeId: node.id,
      url: node.frontmatter.url,
    });

    if (fileNode) {
      createNodeField({ name: 'localFile', node, value: fileNode.id });
    }
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

  const { allMdx } = result.data;

  const componentNodes = allMdx.nodes;

  componentNodes.forEach((node) => {
    const {
      fields: { slug },
      internal: { contentFilePath },
    } = node;

    createPage({
      component: `${docTemplate}?__contentFilePath=${contentFilePath}`,
      context: {
        id: node.id,
        slug,
      },
      path: slug,
    });
  });
};
