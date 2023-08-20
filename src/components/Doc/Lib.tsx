import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FlexBox } from '@tidy-ui/all';
import { IMdxFields, IMdxFrontmatter, IPublicUrl, IRemoteAsset, ISite } from '../types';

interface ILibData {
  lib: {
    nodes: ILibNode[];
  };
  licenseBadge: IRemoteAsset;
  site: ISite;
}

interface ILibNode {
  fields: IMdxFields;
  frontmatter: IMdxFrontmatter;
  npmLibBadge: IPublicUrl;
  sourceBadge: IPublicUrl;
}

interface Props {
  component: string;
}

const Lib: React.FC<Props> = ({ component }) => {
  const {
    lib: { nodes },
    licenseBadge,
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
      licenseBadge: markdownRemark(frontmatter: { title: { eq: "License" } }) {
        remote {
          publicURL
        }
      }
      lib: allMdx {
        nodes {
          npmLibBadge {
            publicURL
          }
          sourceBadge {
            publicURL
          }
          fields {
            slug
          }
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
    <FlexBox margin="2rem 0" gap="1rem">
      <img alt="License" src={licenseBadge.remote?.publicURL} />
      <a href={`${source!.githubLink}${source!.packagesPath}/${currentLib?.frontmatter.component}`} target="_blank">
        <img alt={currentLib?.frontmatter.component} src={currentLib?.sourceBadge.publicURL} />
      </a>
      <a href={`${npmJs!.packageBaseUrl}${currentLib?.frontmatter.lib}`} target="_blank">
        <img alt="npm (scoped)" src={currentLib?.npmLibBadge.publicURL} />
      </a>
    </FlexBox>
  );
};

export default Lib;
