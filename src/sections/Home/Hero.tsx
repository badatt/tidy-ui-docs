import React from 'react';
import { Button, Code, color, FlexBox, FlexItem, hsla, Stack, styled, Text } from '@tidy-ui/all';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from 'hooks';

import DynamicWord from './DynamicWord';

const NpmCommand = styled(Code)`
  font-weight: bold;
  color: ${({ theme: { isDark } }) => (isDark ? hsla(color.green[300]) : hsla(color.green[700]))};
`;

const Hero: React.FC = () => {
  const { theme } = useTheme();
  return (
    <FlexBox fld="column" gap="2rem" ali="center">
      <FlexItem>
        <Text.H2 bld ctr color={theme.isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
          Create <DynamicWord /> React apps with Tidy UI
        </Text.H2>
      </FlexItem>
      <FlexItem>
        <Text.H6 ctr color={hsla(color.slate[500])}>
          <blockquote>
            Tidy UI is a lightweight and modular React component library that empowers developers to build polished,
            scalable interfaces with ease. It provides a curated set of essential building blocks designed for speed,
            consistency, and maintainability.
          </blockquote>
        </Text.H6>
      </FlexItem>
      <FlexItem>
        <Stack gap="1rem" align="center">
          <Link to="/getting-started">
            <Button variant="primary" girth="xxl" tone="success" padding="0.125rem 3rem">
              Get started
            </Button>
          </Link>
          <Link to="https://www.npmjs.com/package/@tidy-ui/all" target="_blank">
            <NpmCommand canCopy={false}>
              <FontAwesomeIcon icon={faTerminal} color={hsla(color.orange[500])} /> npm i @tidy-ui/all
            </NpmCommand>
          </Link>
        </Stack>
      </FlexItem>
    </FlexBox>
  );
};

export default Hero;
