import * as React from 'react';
import { FlexBox } from '@tidy-ui/layout';
import { Chip } from '@tidy-ui/presentation';
import { Icon } from 'ui';

interface Props {
  source: string;
}

const EditOnGithub: React.FC<Props> = ({ source }) => {
  return (
    <a href={source} target="_blank">
      <Chip tone="minor" ele={<FlexBox gap="0.5rem" />}>
        <Icon icon="fa-brands fa-github" />
        Edit this page
      </Chip>
    </a>
  );
};

export default EditOnGithub;
