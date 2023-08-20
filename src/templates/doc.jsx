import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { styled, Text } from '@tidy-ui/all';
import { mdxComponents } from 'ui';
import { Page } from 'components';

const ContentWrapper = styled.div`
  padding: 0 0 4rem 0;
`;

const Doc = ({ children, ...data }) => {
  const {
    pageContext: {
      frontmatter,
      slug,
    },
    path,
  } = data;
  const { description, title } = frontmatter;

  return (
    <Page
      path={path}
      slug={slug}
    >
      <ContentWrapper>
        <Text.h2 bld margin="2rem 0">
          {title}
        </Text.h2>
        <Text.base>{description}</Text.base>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </ContentWrapper>
    </Page>
  );
};

export default Doc;
