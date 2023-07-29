import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import { FlexBox } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import * as Styled from './styles';

interface IComponentNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    class: string;
    component: string;
  };
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
      components: allMdx(filter: { fields: { slug: { glob: "/components/*" } } }) {
        nodes {
          id
          frontmatter {
            class
            component
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
          <FlexBox key={s} fld="column" alc="stretch">
            <Text.caption uc bld margin="1rem 0" tone="minor">
              {s}
            </Text.caption>
            {sorted[s].map((c) => (
              <Styled.ComponentLink to={`${c.fields.slug}`} key={c.id} activeClassName="active">
                {c.frontmatter.component}
              </Styled.ComponentLink>
            ))}
          </FlexBox>
        );
      })}
    </>
  );
};

export default Components;
