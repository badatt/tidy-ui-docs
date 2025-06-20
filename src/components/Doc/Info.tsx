import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexBox, IconButton, Text } from '@tidy-ui/all';

import { Icon } from 'ui';
import { IMdxFields, ISite } from 'types';

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
    <FlexBox ali="center" gap="1rem">
      <Text.Caption>{currentDoc.fields.timeToRead?.text}</Text.Caption>
      <a href={encodeURI(`${docs?.githubLink}${docs?.contentPath}${currentDoc.fields.pageSourcePath}`)} target="_blank">
        <IconButton girth="xs" tone="info" icon={<Icon icon="fa-brands fa-github" />}>
          Edit this page
        </IconButton>
      </a>
    </FlexBox>
  );
};

export default Info;
