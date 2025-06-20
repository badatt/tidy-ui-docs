import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Anchor, Chip, FlexBox } from '@tidy-ui/all';

import { IMdxFrontmatter, ISite } from 'types';

interface ILibData {
  lib: {
    nodes: ILibNode[];
  };
  site: ISite;
}

interface ILibNode {
  frontmatter: IMdxFrontmatter;
}

interface Props {
  component: string;
}

const Lib: React.FC<Props> = ({ component }) => {
  const {
    lib: { nodes },
    site,
  }: ILibData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          source {
            githubLink
            packagesPath
          }
          npmJs {
            packageBaseUrl
          }
        }
      }
      lib: allMdx {
        nodes {
          frontmatter {
            lib
            component
          }
        }
      }
    }
  `);
  const currentLib = nodes.find((n) => n.frontmatter.lib && n.frontmatter.component === component);

  if (currentLib === undefined) {
    return;
  }

  const { source, npmJs } = site.siteMetadata!;
  return (
    <FlexBox margin="2rem 0" gap="1rem" ali="center" alc="center">
      <Chip girth="xs" tone="info">
        MIT
      </Chip>
      <Anchor
        canLaunch
        href={`${source!.githubLink}${source!.packagesPath}/${currentLib?.frontmatter.component}`}
        girth="xs"
        tone="info"
      >
        Source
      </Anchor>
      <Anchor href={`${npmJs!.packageBaseUrl}${currentLib?.frontmatter.lib}`} canLaunch girth="xs" tone="info">
        Npm
      </Anchor>
    </FlexBox>
  );
};

export default Lib;
