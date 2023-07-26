import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from '../../helpers/definitions';
import { calculateExperience } from '../../helpers/utils';

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

interface MetaBanner extends SectionTitle {
  content: string;
  dataOfJoining: string;
  linkText: string;
  linkTo: string;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site, markdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
          dataOfJoining
        }
      }
    }
  `);

  const metaBanner: MetaBanner = markdownRemark.frontmatter;
  metaBanner.content = metaBanner.content.replace('{{experience}}', `${calculateExperience(metaBanner.dataOfJoining)}`);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          content: metaBanner.content,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaBanner.content,
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
          content: site.siteMetadata.author,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaBanner.content,
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
