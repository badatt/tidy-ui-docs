import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Stack, orchidDark, orchidLight } from '@tidy-ui/all';

import { useTheme } from 'hooks';
import Icon from 'ui/Icon';

import * as Styled from './styles';

const Actions: React.FC = () => {
  const {
    site: {
      siteMetadata: { source },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          source {
            githubLink
          }
        }
      }
    }
  `);

  const { theme, changeTheme } = useTheme();

  return (
    <Stack gap="0.5rem">
      <a href={source.githubLink} target="_blank">
        <Styled.IconBtn icon={<Icon icon="fa-brands fa-github" />} />
      </a>
      <Styled.IconBtn
        onClick={() => changeTheme(theme.isDark ? orchidLight : orchidDark)}
        icon={theme.isDark ? <Icon icon="fa-regular fa-sun" /> : <Icon icon="fa-solid fa-moon" />}
      />
    </Stack>
  );
};

export default Actions;
