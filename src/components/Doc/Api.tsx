import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Divider, FlexBox, Stack, Tag, Text } from '@tidy-ui/all';
import { IMdxFields, IMdxFrontmatter } from '../../types';

interface IApiDocData {
  apiDoc: {
    nodes: IApiDocNode[];
  };
}

interface IApiDocNode {
  fields: IMdxFields;
  frontmatter: IMdxFrontmatter;
}

interface Props {
  component: string;
}

const Api: React.FC<Props> = ({ component }) => {
  const {
    apiDoc: { nodes },
  }: IApiDocData = useStaticQuery(graphql`
    {
      apiDoc: allMdx {
        nodes {
          frontmatter {
            lib
            component
          }
          fields {
            slug
            componentInterfaces {
              description
              name
              since
              members {
                defaultValue
                description
                name
                nullable
                optional
                since
                types
              }
            }
          }
        }
      }
    }
  `);
  const currentDoc = nodes.find((n) => n.frontmatter.lib && n.frontmatter.component === component);

  if (currentDoc === undefined) {
    return;
  }
  const {
    fields: { componentInterfaces },
  } = currentDoc;
  return (
    <Stack order="column" gap="1rem" divider={<Divider />}>
      {componentInterfaces.map((c) => (
        <React.Fragment key={c.name}>
          <FlexBox ali="center" gap="1rem">
            <Text.h6 bld>{c.name}</Text.h6>
            <Tag girth="sm">{c.since}</Tag>
          </FlexBox>

          <Text.base>
            <div
              dangerouslySetInnerHTML={{
                __html: c.description!,
              }}
            />
          </Text.base>
          {c.members?.map((m) => (
            <React.Fragment key={m.name}>
              <Text.base margin="2rem 0">
                <Stack align="center" gap="1rem" margin="0.5rem 0">
                  <FlexBox gap="1rem" ali="center">
                    <b>
                      <mark style={{ padding: '0 0.25em' }}>{m.name}</mark>
                    </b>
                    {(m.optional === false || m.optional === null) && (
                      <Tag girth="sm" tone="warning">
                        required
                      </Tag>
                    )}
                  </FlexBox>
                  <Tag girth="sm">{m.since}</Tag>
                </Stack>

                <p
                  dangerouslySetInnerHTML={{
                    __html: m.description!,
                  }}
                />

                <Stack order="column" gap="0.5rem" margin="0.5rem 0 0 0">
                  <p>
                    <small>
                      <b>Type </b>
                    </small>
                    <code>{m.types}</code>
                  </p>

                  {m.defaultValue && (
                    <p>
                      <small>
                        <b>Default </b>
                      </small>
                      <code>{m.defaultValue}</code>
                    </p>
                  )}
                </Stack>
              </Text.base>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default Api;
