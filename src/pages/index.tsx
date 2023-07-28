import React from 'react';
import { Link } from 'gatsby';
import { css, styled } from '@tidy-ui/commons';
import { FlexBox } from '@tidy-ui/layout';
import { Button, Text } from '@tidy-ui/presentation';
import Footer from 'components/Footer';
import SEO from 'components/SEO';

const TidyUiName = styled(Text.hero)`
  ${({ theme: { palette } }) => css`
    background: linear-gradient(to right, ${palette.major[600]}, ${palette.minor[600]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <FlexBox as="section" ctr fld="column" padding="4rem 0" gap="2rem" ali="center">
        <Text.h2 bld ctr>
          Create elegant React apps with
        </Text.h2>
        <TidyUiName bld ctr>
          Tidy UI
        </TidyUiName>
        <Text.h5 ctr width="50%">
          Lightweight, modular React component library, providing essential building blocks for effortless application
          development
        </Text.h5>
        <Link to="/docs/components">
          <Button variant="primary" girth="xxl" tone="success" padding="0.5rem 4rem">
            Get started
          </Button>
        </Link>
      </FlexBox>
      <Footer />
    </>
  );
};

export default IndexPage;
