import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IMdRemoteAsset, IPublicUrl } from 'types';
import { FlexBox } from '@tidy-ui/all';

interface IBadgeNode {
  frontmatter: IMdRemoteAsset;
  id: string;
  remote: IPublicUrl;
}

interface IBadges {
  badges: {
    nodes: IBadgeNode[];
  };
}

const HealthBadge: React.FC = () => {
  const { badges }: IBadges = useStaticQuery(graphql`
    {
      badges: allMarkdownRemark(filter: { frontmatter: { category: { eq: "badge" } } }) {
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
      {badges.nodes.map((b) => (
        <a key={b.id} href={b.frontmatter.reference} target="_blank">
          <img src={b.remote.publicURL} alt={b.frontmatter.title} />
        </a>
      ))}
    </FlexBox>
  );
};

export default HealthBadge;
