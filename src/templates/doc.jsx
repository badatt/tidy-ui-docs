import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { styled } from '@tidy-ui/commons';
import { Divider, FlexBox, FlexItem } from '@tidy-ui/layout';
import { mdxComponents } from 'ui';
import { Breadcrumb, EditOnGithub, Footer, MainNav } from 'components';

const ContentWrapper = styled.div`
  padding: 0 0 4rem 0;
`;

const Doc = ({ children, ...data }) => {
  const {
    pageContext: { breadcrumb, pageSourceUrl, slug },
  } = data;
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={data.path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <FlexBox fld="row" jsc="space-between">
          {slug !== '/getting-started' && <Breadcrumb links={breadcrumb} />}
          <EditOnGithub source={pageSourceUrl} />
        </FlexBox>
        <ContentWrapper>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </ContentWrapper>
        <Divider />
        <FlexBox></FlexBox>
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Doc;
