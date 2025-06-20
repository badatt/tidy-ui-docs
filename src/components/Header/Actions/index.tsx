import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { orchidDark, orchidLight, FlexBox } from '@tidy-ui/all';

import { useTheme } from 'hooks';
import { Icon } from 'ui';

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
    <FlexBox gap="0.5rem" ali="center">
      <a href={source.githubLink} target="_blank">
        <Styled.IconBtn icon={<Icon icon="fa-brands fa-github" />} />
      </a>
      <Styled.IconBtn
        onClick={() => changeTheme(theme.isDark ? orchidLight : orchidDark)}
        icon={theme.isDark ? <Icon icon="fa-regular fa-sun" /> : <Icon icon="fa-solid fa-moon" />}
      />
    </FlexBox>
  );
};

export default Actions;
