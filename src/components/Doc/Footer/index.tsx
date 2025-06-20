import * as React from 'react';
import { FlexBox, Text } from '@tidy-ui/all';

import { Icon } from 'ui';

const Footer: React.FC = () => {
  return (
    <FlexBox as="footer" fld="column" ali="center" padding="2rem" margin="5rem 0 0 0" gap="1rem">
      <FlexBox gap="0.5rem" ali="center" fld="column">
        <Text.Caption>
          Crafted with a whole lot of &nbsp; <Icon icon="fa-solid fa-heart" /> &nbsp; for the developer community!
        </Text.Caption>
      </FlexBox>
    </FlexBox>
  );
};

export default Footer;
