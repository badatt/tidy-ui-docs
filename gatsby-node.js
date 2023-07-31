const path = require(`path`);
const slugify = require(`@sindresorhus/slugify`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);

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

    if(node.frontmatter.lib && node.frontmatter.lib !== null) {

      const npmLibBadgeFile = await createRemoteFileNode({
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        ext: `.svg`,
        getCache,
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        url: `https://img.shields.io/npm/v/${node.frontmatter.lib}`, // string that points to the URL of the image
      });
      if (npmLibBadgeFile) {
        createNodeField({ name: 'npmLibBadgeFile', node, value: npmLibBadgeFile.id });
      }

      const sourceBadgeFile = await createRemoteFileNode({
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        ext: `.svg`,
        getCache,
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        url: `https://img.shields.io/badge/source-${node.frontmatter.component}-DarkGreen?logo=github`, // string that points to the URL of the image
      });
      if (npmLibBadgeFile) {
        createNodeField({ name: 'sourceBadgeFile', node, value: sourceBadgeFile.id });
      }
    }
  }

  if (node.internal.type === 'MarkdownRemark' && node.frontmatter.url && node.frontmatter.url !== null) {
    const fileNode = await createRemoteFileNode({
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      ext: `.svg`,
      getCache,
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      url: node.frontmatter.url, // string that points to the URL of the image
    });

    // if the file was created, extend the node with "localFile"
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
          body
          frontmatter {
            class
            component
            description
            lib
            title
          }
          fields {
            slug
            pageSourcePath
          }
          npmLibBadge {
            publicURL
          }
          sourceBadge {
            publicURL
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
          source {
            githubLink
            packagesPath
          }
          npmJs {
            packageBaseUrl
          }
        }
      }
      licenseBadge: markdownRemark(frontmatter: {title: {eq: "License"}}) {
        remote {
          publicURL
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const { allMdx, site, licenseBadge } = result.data;

  const { docs, source, npmJs } = site.siteMetadata;

  const componentNodes = allMdx.nodes;

  componentNodes.forEach((node) => {
    const {
      fields: { pageSourcePath, slug },
      frontmatter: { component, lib },
      internal: { contentFilePath },
      npmLibBadge,
      sourceBadge
    } = node;
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
      context: {
        breadcrumb: slug !== '/getting-started' ? breadcrumb : undefined,
        id: node.id,
        libSource: `${source.githubLink}${source.packagesPath}/${component}`,
        libUrl: `${npmJs.packageBaseUrl}${lib}`,
        licenseBadge: licenseBadge.remote.publicURL,
        npmLibBadge: npmLibBadge?.publicURL,
        pageSourceUrl: encodeURI(`${docs.githubLink}${docs.contentPath}${pageSourcePath}`),
        slug,
        sourceBadge: sourceBadge?.publicURL
      },
      path: slug,
    });
  });
};
