import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Stack } from '@tidy-ui/layout';
import { useReadApp, useUpdateApp } from 'hooks';
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
      <a href={source.githubLink} target="_blank">
        <Styled.IconBtn icon={<Icon icon="fa-brands fa-github" />} />
      </a>
      <Styled.IconBtn
        onClick={handleThemeChange}
        icon={data?.theme == 'dark' ? <Icon icon="fa-regular fa-sun" /> : <Icon icon="fa-solid fa-moon" />}
      />
    </Stack>
  );
};

export default Actions;
