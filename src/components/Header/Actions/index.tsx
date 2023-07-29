import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DarkModeIcon, LightModeIcon } from '@tidy-ui/icons';
import { Stack } from '@tidy-ui/layout';
import { useReadApp, useUpdateApp } from 'hooks/useApp';
import Icon from 'ui/Icon';
import * as Styled from './styles';

const Actions: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          githubLink
        }
      }
    }
  `);

  const { data } = useReadApp();
  const { mutate } = useUpdateApp();

  const handleThemeChange = () => {
    if (data?.theme == 'light') {
      mutate({ theme: 'dark' });
    } else {
      mutate({ theme: 'light' });
    }
  };

  return (
    <Stack gap="0.5rem">
      <a href={siteMetadata.githubLink} target="_blank">
        <Styled.IconBtn icon={<Icon icon="fa-brands fa-github" />} />
      </a>
      <Styled.IconBtn onClick={handleThemeChange} icon={data?.theme == 'dark' ? <LightModeIcon /> : <DarkModeIcon />} />
    </Stack>
  );
};

export default Actions;
