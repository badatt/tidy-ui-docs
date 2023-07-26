import React from 'react';
import { styled } from '@tidy-ui/commons';
import { FlexBox } from '@tidy-ui/layout';
import Actions from './Actions';
import HomeLogo from './HomeLogo';

const StyledHeader = styled(FlexBox)`
  height: 80px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HomeLogo />
      <Actions />
    </StyledHeader>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
