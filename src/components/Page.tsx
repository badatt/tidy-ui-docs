import * as React from 'react';
import { Container } from '@tidy-ui/all';
import SEO from './SEO';

interface Props extends React.PropsWithChildren {
  path: string;
}

const Page: React.FC<Props> = ({ children, path }) => {
  return (
    <>
      <SEO title={path} />
      <Container height="calc(100vh - 80px)" gutter="0">
        {children}
      </Container>
    </>
  );
};

export default Page;
