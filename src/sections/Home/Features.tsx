import React from 'react';
import { Text, hsla, color, Grid, GridItem, Paper, Stack } from '@tidy-ui/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxesPacking,
  faPalette,
  faPaintBrush,
  faLaptopCode,
  faSliders,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

import { useTheme } from 'hooks';

const features = [
  {
    title: 'Modular & Lightweight',
    description: 'Import only what you need. Tidy UI is built for tree-shaking and optimized bundle size.',
    icon: faBoxesPacking,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.amber[300]) : hsla(color.amber[700])),
  },
  {
    title: 'Beautiful by Default',
    description: 'Pre-styled, accessible components that follow modern UI/UX standards out of the box.',
    icon: faPalette,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.rose[300]) : hsla(color.rose[700])),
  },
  {
    title: 'Built with Styled Components',
    description: 'Uses the power of styled-components to offer dynamic, themeable design.',
    icon: faPaintBrush,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.sky[300]) : hsla(color.sky[700])),
  },
  {
    title: 'Developer Friendly',
    description: 'Simple, intuitive APIs with great TypeScript support and intelligent defaults.',
    icon: faLaptopCode,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.slate[300]) : hsla(color.slate[700])),
  },
  {
    title: 'Customizable Themes',
    description: 'Easily override default styles and build your own design system.',
    icon: faSliders,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.blue[300]) : hsla(color.blue[700])),
  },
  {
    title: 'Ready for Production',
    description: 'Battle-tested components with responsive design and accessibility in mind.',
    icon: faSquareCheck,
    iconColor: (isDark: boolean) => (isDark ? hsla(color.green[300]) : hsla(color.green[700])),
  },
];

const Features: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Grid gap={32}>
      {features.map((feature) => (
        <GridItem key={feature.title} xl={8} lg={8} md={8} sm={12} xs={12}>
          <Paper height="200px">
            <Stack order="column" align="center" gap="0.5rem">
              <Text.H4 ctr margin="0.5rem" color={feature.iconColor(theme.isDark)}>
                <FontAwesomeIcon icon={feature.icon} />
              </Text.H4>
              <Text.Subtitle2 ctr>{feature.title}</Text.Subtitle2>
              <Text.Body2 ctr>{feature.description}</Text.Body2>
            </Stack>
          </Paper>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Features;
