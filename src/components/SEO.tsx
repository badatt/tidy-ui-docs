import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  lang?: string;
  title: string;
}

interface SiteMetaData {
  author: {
    email: string;
    name: string;
  };
  description: string;
  title: string;
}

interface Site {
  site: {
    siteMetadata: SiteMetaData;
  };
}

const SEO: React.FC<Props> = ({ lang, title }) => {
  const {
    site: { siteMetadata },
  }: Site = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author {
            email
            name
          }
          description
          title
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${siteMetadata.title} %s`}
      meta={[
        {
          content: siteMetadata.description,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: siteMetadata.description,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: siteMetadata.author.name,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: siteMetadata.description,
          name: `twitter:description`,
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  title: ``,
};

export default SEO;
