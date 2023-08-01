import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { styled } from '@tidy-ui/commons';
import { Divider, FlexBox } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import { mdxComponents } from 'ui';
import { Page } from 'components';

const ContentWrapper = styled.div`
  padding: 0 0 4rem 0;
`;

const Doc = ({ children, ...data }) => {
  const {
    pageContext: {
      breadcrumb,
      frontmatter,
      pageSourceUrl,
      libSource,
      libUrl,
      npmLibBadge,
      licenseBadge,
      sourceBadge,
      timeToRead,
    },
    path,
  } = data;
  const { component, lib, description, title } = frontmatter;

  return (
    <Page path={path} breadcrumb={breadcrumb} source={pageSourceUrl} timeToRead={timeToRead}>
      <ContentWrapper>
        <Text.h2 bld margin="2rem 0">
          {title}
        </Text.h2>
        {description}
        {lib && (
          <FlexBox margin="2rem 0" gap="1rem">
            <img alt="License" src={licenseBadge} />
            <a href={libSource} target="_blank">
              <img alt={component} src={sourceBadge} />
            </a>
            <a href={libUrl} target="_blank">
              <img alt="npm (scoped)" src={npmLibBadge} />
            </a>
          </FlexBox>
        )}
        <Divider />
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </ContentWrapper>
    </Page>
  );
};

export default Doc;
