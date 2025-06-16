import React from 'react';
import { Link } from 'gatsby';
import { Button, color, css, FlexBox, hsla, styled, Text, useTheme } from '@tidy-ui/all';

import { Page } from 'components';

const HeroName = styled(Text.Hero)`
  ${({ theme: { palette } }) => css`
    background: linear-gradient(to right, ${palette.major[600]}, ${palette.minor[600]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const IndexPage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Page path="/Home">
      <FlexBox as="section" fld="column" padding="4rem 0" gap="2rem" ali="center">
        <Text.H2 bld ctr color={theme.isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
          Create elegant React apps with
        </Text.H2>
        <HeroName bld ctr>
          Tidy UI
        </HeroName>
        <Text.H5 ctr width="50%" color={hsla(color.slate[500])}>
          Lightweight, modular React component library, providing essential building blocks for effortless application
          development
        </Text.H5>
        <Link to="/getting-started">
          <Button variant="primary" girth="xxl" tone="success" padding="0.5rem 4rem">
            Get started
          </Button>
        </Link>
      </FlexBox>
    </Page>
  );
};

export default IndexPage;
