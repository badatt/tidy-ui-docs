import * as React from 'react';
import { Stack } from '@tidy-ui/layout';
import Components from './Components';
import * as Styled from './styles';

interface Props {
  path?: string;
}

const Main: React.FC<Props> = ({ path }) => {
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
        <Styled.MainLink to="/hooks/use-portal" activeClassName="active">
          <Styled.MainLinkIcon icon="fa-solid fa-screwdriver-wrench" />
          Hooks
        </Styled.MainLink>
        <Styled.MainLink to="/themes/orchid" activeClassName="active">
          <Styled.MainLinkIcon icon="fa-solid fa-palette" />
          Themes
        </Styled.MainLink>
      </Stack>
      {path?.match(/\/components.*/gm) && <Components />}
    </Styled.Nav>
  );
};

export default Main;
