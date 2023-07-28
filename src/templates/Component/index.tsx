import * as React from 'react';
import { FlexBox, FlexItem } from '@tidy-ui/layout';
import Footer from 'components/Footer';
import MainNav from 'components/MainNav';

interface Props {
  children: React.ReactNode;
}

const Component: React.FC<Props> = ({ children }) => {
  return (
    <FlexBox>
      <FlexItem fsk={0}>
        <MainNav />
      </FlexItem>
      <FlexItem flx="1">
        {children}
        <Footer />
      </FlexItem>
    </FlexBox>
  );
};

export default Component;
