import React from 'react';
import { Link } from 'gatsby';
import { Button, color, css, FlexBox, hsla, styled, Text, useTheme } from '@tidy-ui/all';
import { Page } from 'components';

const HeroName = styled(Text.hero)`
  ${({ theme: { palette } }) => css`
    background: linear-gradient(to right, ${palette.major[600]}, ${palette.minor[600]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const IndexPage: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <Page path="/Home">
      <FlexBox as="section" fld="column" padding="4rem 0" gap="2rem" ali="center">
        <Text.h2 bld ctr color={isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
          Create elegant React apps with
        </Text.h2>
        <HeroName bld ctr>
          Tidy UI
        </HeroName>
        <Text.h5 ctr width="50%" color={hsla(color.slate[500])}>
          Lightweight, modular React component library, providing essential building blocks for effortless application
          development
        </Text.h5>
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
