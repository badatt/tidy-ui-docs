import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import { IMdxFields, IMdxFrontmatter } from 'types';
import { FlexBox, Text } from '@tidy-ui/all';
import { Icon } from 'ui';
import * as Styled from './styles';

interface IComponentNode {
  fields: IMdxFields;
  frontmatter: IMdxFrontmatter;
  id: string;
}

interface IComponentNodes {
  components: {
    nodes: IComponentNode[];
  };
}

const Components: React.FC = () => {
  const {
    components: { nodes },
  }: IComponentNodes = useStaticQuery(graphql`
    {
      components: allMdx(
        filter: { fields: { slug: { glob: "/components/*" } }, frontmatter: { status: { ne: "DRAFT" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            class
            component
            status
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const grouped = _.groupBy(nodes, 'frontmatter.class');
  const sorted = _.fromPairs(
    _.keys(grouped)
      .sort(function (a, b) {
        return b.localeCompare(a);
      })
      .map((k) => [k, grouped[k]]),
  );
  return (
    <>
      {Object.keys(sorted).map((s) => {
        return (
          <FlexBox key={s} fld="column" alc="stretch" margin="1rem 0">
            <Text.caption uc bld margin="1rem 0" tone="minor">
              {s}
            </Text.caption>
            {sorted[s].map((c) => (
              <Styled.ComponentLink to={`${c.fields.slug}`} key={c.id} activeClassName="active">
                {c.frontmatter.component}
                {c.frontmatter.status === 'NEW' && <Icon icon="fa-solid fa-wand-magic-sparkles" />}
              </Styled.ComponentLink>
            ))}
          </FlexBox>
        );
      })}
    </>
  );
};

export default Components;
