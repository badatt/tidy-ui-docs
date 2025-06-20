/* eslint-disable sort-keys/sort-keys-fix */
module.exports = {
  siteMetadata: {
    title: `Tidy UI`,
    author: {
      name: 'Balu Praveen Datty',
      email: 'dev.badatt@gmail.com',
      github: 'https://github.com/badatt',
      githubUsername: '@badatt',
      linkedin: 'https://www.linkedin.com/in/balu-praveen-datty/',
      url: 'https://balu.datty.in',
    },
    description:
      'Tidy UI is a family of lightweight, modular React component library, providing essential building blocks for effortless application development. The components are powered styled-components, features include css-in-js, typography, layouts, theming etc',
    npmJs: {
      packageBaseUrl: 'https://www.npmjs.com/package/',
    },
    source: {
      githubLink: 'https://github.com/badatt/tidy-ui',
      packagesPath: '/tree/main/packages',
    },
    docs: {
      githubLink: 'https://github.com/badatt/tidy-ui-docs',
      contentPath: '/tree/main/content',
    },
    siteUrl: `https://tidy-ui.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `remote`,
        path: `${__dirname}/src/assets/remote`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`),
            require(`remark-emoji`),
            require(`./plugins/gatsby-remark-prop-style-plugin`),
            require(`./plugins/gatsby-remark-u-style-plugin`),
          ],
          rehypePlugins: [require(`rehype-slug`), [require(`rehype-autolink-headings`), { behavior: `wrap` }]],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tidy UI documentation site`,
        description: `Tidy UI is a family of lightweight, modular React component library, providing essential building blocks for effortless application development. 
        The components are powered styled-components, features include css-in-js, typography, layouts, theming etc`,
        short_name: `tidy-ui-docs`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/images/tidy-ui-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/App/index.tsx`),
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          dev: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          prd: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
  ],
};
