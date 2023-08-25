import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { styled, Text } from '@tidy-ui/all';
import { mdxComponents } from 'ui';
import { MdDoc } from 'components';

const ContentWrapper = styled.div`
  padding: 0 0 4rem 0;
`;

const Doc = ({ children, ...data }) => {
  const {
    pageContext: { frontmatter, slug },
    path,
  } = data;
  const { description, title } = frontmatter;

  return (
    <MdDoc path={path} slug={slug}>
      <ContentWrapper>
        <Text.h2 bld margin="2rem 0">
          {title}
        </Text.h2>
        <Text.base style={{ lineHeight: 1.8 }}>
          <blockquote>{description}</blockquote>
        </Text.base>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </ContentWrapper>
    </MdDoc>
  );
};

export default Doc;
