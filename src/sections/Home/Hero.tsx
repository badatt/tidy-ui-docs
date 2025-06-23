import React from 'react';
import { Button, color, css, FlexBox, FlexItem, hsla, Stack, styled, Text } from '@tidy-ui/all';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from 'hooks';

import DynamicWord from './DynamicWord';
import HeroLogo from './HeroLogo';

const NpmCommand = styled.div`
  ${({ theme: { isDark, layout } }) => css`
    padding: 0.625rem 1rem;
    font-family: monospace;
    border-radius: ${layout.radius};
    background-color: ${isDark ? hsla(color.slate[700]) : hsla(color.slate[200])};
  `};
`;

const HeroLogoBg = styled(HeroLogo)`
  min-height: 50vh;
  min-width: 80vw;
  right: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.06;
  z-index: 0;
`;

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <FlexBox jsc="space-between">
      <HeroLogoBg />
      <FlexItem ele={<FlexBox fld="column" gap="1rem" ali="flex-start" />}>
        <FlexItem>
          <Text.H2 bld ctr color={theme.isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
            Create <DynamicWord />
          </Text.H2>
        </FlexItem>
        <FlexItem>
          <Text.H2 bld ctr color={theme.isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
            React apps
          </Text.H2>
        </FlexItem>
        <FlexItem>
          <Text.H6 bld ctr color={theme.isDark ? hsla(color.gray[300]) : hsla(color.gray[700])}>
            with Tidy UI
          </Text.H6>
        </FlexItem>
        <FlexItem>
          <Stack gap="1rem" align="center">
            <Link to="/getting-started">
              <Button variant="primary" tone="major" girth="lg" padding="0.125rem 1rem">
                Get started
              </Button>
            </Link>
            <Link to="https://www.npmjs.com/package/@tidy-ui/all" target="_blank">
              <NpmCommand>
                <FontAwesomeIcon icon={faTerminal} color={hsla(color.orange[500])} /> npm i @tidy-ui/all
              </NpmCommand>
            </Link>
          </Stack>
        </FlexItem>
      </FlexItem>
      <FlexItem></FlexItem>
    </FlexBox>
  );
};

export default Hero;
