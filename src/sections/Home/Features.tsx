import React from 'react';
import { Grid, GridItem, Paper, Text } from '@tidy-ui/all';
import { graphql, useStaticQuery } from 'gatsby';

import { IMdFrontMatter } from 'types';
import { Icon } from 'ui';

import Feature from './Feature';

interface IFeature extends IMdFrontMatter {
  icon?: string;
  content?: string[];
}

interface IFeatureNode {
  frontmatter: IFeature;
  id: string;
}

interface IFeatures {
  features: {
    nodes: IFeatureNode[];
  };
}

const Features: React.FC = () => {
  const { features }: IFeatures = useStaticQuery(graphql`
    {
      features: allMarkdownRemark(filter: { frontmatter: { category: { eq: "features" }, type: { eq: "data" } } }) {
        nodes {
          id
          frontmatter {
            title
            id
            icon
            content
          }
        }
      }
    }
  `);

  return (
    <Grid gap={16}>
      {features.nodes.map((feature) => (
        <GridItem key={feature.frontmatter.id} xl={8} lg={8} md={8} sm={12} xs={12}>
          <Paper height="420px" overflow="hidden">
            <Text.H5 ctr bld margin="0 0 2rem 0">
              {feature.frontmatter.title} <Icon icon={feature.frontmatter.icon} />
            </Text.H5>
            <Feature id={feature.frontmatter.id} content={feature.frontmatter.content} />
          </Paper>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Features;
