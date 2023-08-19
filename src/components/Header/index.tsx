import React from 'react';
import { FlexBox } from '@tidy-ui/all';
import Actions from './Actions';
import HomeLogo from './HomeLogo';
import * as Styled from './styles';

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <FlexBox jsc="space-between" ali="center" width="100%">
        <HomeLogo />
        <Actions />
      </FlexBox>
    </Styled.Header>
  );
};

export default Header;
