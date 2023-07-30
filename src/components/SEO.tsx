import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type Meta =
  | {
      content: any;
      name: string;
    }
  | {
      content: any;
      property: string;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: React.FC<Props> = ({ lang, meta, title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
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
      titleTemplate={`${siteMetadata.title} | %s`}
      meta={[
        {
          content: siteMetadata.author,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: siteMetadata.author,
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
          content: siteMetadata.author,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: siteMetadata.author,
          name: `twitter:description`,
        },
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [] as Meta[],
};

export default SEO;
