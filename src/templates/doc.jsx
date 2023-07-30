import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FlexBox, FlexItem } from '@tidy-ui/layout';
import { mdxComponents } from 'ui';
import { Footer, MainNav } from 'components';

const Doc = ({ children, ...data }) => {
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={data.path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Doc;
