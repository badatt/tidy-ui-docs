import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FlexBox, FlexItem } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';
import Footer from 'components/Footer';
import MainNav from 'components/MainNav';

const components = {
  h1: (props) => <Text.h3 {...props} margin="1.5rem 0" />,
  h2: (props) => <Text.h4 {...props} margin="1.5rem 0" style={{ fontSize: '2.5rem' }} />,
  h3: (props) => <Text.h4 {...props} margin="1.2rem 0" style={{ fontSize: '1.75rem' }} />,
  h4: (props) => <Text.h4 {...props} margin="1rem 0" style={{ fontSize: '1.2rem' }} />,
  h5: (props) => <Text.h6 {...props} margin="0.75rem 0" style={{ fontSize: '1rem' }} />,
  h6: (props) => <Text.h6 {...props} margin="0.5rem 0" style={{ fontSize: '0.75rem' }} />,
  p: (props) => <Text.p {...props} style={{ fontSize: '1.2rem', marginBottom: '1rem' }} />,
};

const Doc = ({ children, ...data }) => {
  return (
    <FlexBox>
      <FlexItem span={4}>
        <MainNav path={data.path} />
      </FlexItem>
      <FlexItem span={20} padding="0 1rem">
        <MDXProvider components={components}>{children}</MDXProvider>
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Doc;
