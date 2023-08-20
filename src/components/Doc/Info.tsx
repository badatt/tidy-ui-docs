import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Chip, FlexBox, Text } from '@tidy-ui/all';
import { Icon } from 'ui';
import { IMdxFields, ISite } from '../types';

interface IDocInfoData {
  docInfo: {
    nodes: IDocInfoNode[];
  };
  site: ISite;
}

interface IDocInfoNode {
  fields: IMdxFields;
}

interface Props {
  slug: string;
}

const Info: React.FC<Props> = ({ slug }) => {
  const {
    docInfo: { nodes },
    site,
  }: IDocInfoData = useStaticQuery(graphql`
    {
      docInfo: allMdx {
        nodes {
          fields {
            slug
            pageSourcePath
            timeToRead {
              text
              minutes
              time
              words
            }
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
  const currentDoc = nodes.find((n) => n.fields.slug === slug);

  if (currentDoc === undefined) {
    return;
  }

  const { docs } = site.siteMetadata!;
  return (
    <FlexBox ali="center" gap="2rem">
      <Text.body2>{currentDoc.fields.timeToRead?.text}</Text.body2>
      <a href={encodeURI(`${docs?.githubLink}${docs?.contentPath}${currentDoc.fields.pageSourcePath}`)} target="_blank">
        <Chip ele={<FlexBox gap="0.5rem" />}>
          <Icon icon="fa-brands fa-github" />
          Edit this page
        </Chip>
      </a>
    </FlexBox>
  );
};

export default Info;
