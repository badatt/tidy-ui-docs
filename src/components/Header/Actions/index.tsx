import * as React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useReadApp, useUpdateApp } from 'hooks/useApp';
import Icon from 'ui/Icon';
import { DarkModeIcon, LightModeIcon } from '@tidy-ui/icons';
import { Stack } from '@tidy-ui/layout';
import * as Styles from './styles';

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
      <Link to={siteMetadata.githubLink} target="_blank">
        <Styles.IconBtn icon={<Icon icon={faGithub} />} />
      </Link>
      <Styles.IconBtn onClick={handleThemeChange} icon={data?.theme == 'dark' ? <LightModeIcon /> : <DarkModeIcon />} />
    </Stack>
  );
};

export default Actions;
