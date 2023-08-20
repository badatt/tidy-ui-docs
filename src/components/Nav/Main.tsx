import * as React from 'react';
import { Stack } from '@tidy-ui/all';
import Components from './Components';
import * as Styled from './styles';

interface Props {
  slug: string;
}

const Main: React.FC<Props> = ({ slug }) => {
  return (
    <Styled.Nav>
      <Stack order="column" gap="1rem">
        <Styled.MainLink to="/getting-started" activeClassName="active">
          <Styled.MainLinkIcon icon="fa-solid fa-flag-checkered" />
          Getting Started
        </Styled.MainLink>
        <Styled.MainLink to="/components" activeClassName="active">
          <Styled.MainLinkIcon icon="fa-solid fa-cube" />
          Components
        </Styled.MainLink>
      </Stack>
      {slug.match(/\/components.*/gm) && <Components />}
    </Styled.Nav>
  );
};

export default Main;
