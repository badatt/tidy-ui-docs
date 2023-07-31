import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexBox } from '@tidy-ui/layout';

interface IBadgeNode {
  frontmatter: {
    reference: string;
    title: string;
  },
  id: string;
  remote: {
    publicURL: string
  };
}

interface IBadges {
  badges: {
    nodes: IBadgeNode[]
  }
}

const HealthBadge: React.FC = () => {
  const { badges }: IBadges = useStaticQuery(graphql`
    {
      badges: allMarkdownRemark(filter: {frontmatter: {category: {eq: "badge"}}}) {
        nodes {
          id
          remote {
            publicURL
          }
          frontmatter {
            title
            reference
          }
        }
      }
    }
  `);
  return (
    <FlexBox margin="2rem 0" gap="0.5rem" jsc="center">
      {
        badges.nodes.map(b => <a key={b.id} href={b.frontmatter.reference} target="_blank">
          <img src={b.remote.publicURL} alt={b.frontmatter.title}/>
        </a>)
      }
    </FlexBox>
  );
};

export default HealthBadge;
