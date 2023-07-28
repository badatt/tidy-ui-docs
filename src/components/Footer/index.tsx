import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Icon } from '@tidy-ui/commons';
import { FlexBox, FlexItem } from '@tidy-ui/layout';
import { Text } from '@tidy-ui/presentation';

const Footer: React.FC = () => {
  const { indiaFlag } = useStaticQuery(graphql`
    {
      indiaFlag: file(relativePath: { eq: "india-flag-icon.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <FlexBox as="footer" fld="column" ali="center" padding="2rem" margin="5rem 0 0 0" gap="0.5rem">
      <FlexBox gap="1rem">
        <FlexItem>Made in</FlexItem>
        <FlexItem>
          <Icon ele={<img src={indiaFlag.publicURL} />} />
        </FlexItem>
      </FlexBox>
      <Text.caption>with love for dev community</Text.caption>
    </FlexBox>
  );
};

export default Footer;
