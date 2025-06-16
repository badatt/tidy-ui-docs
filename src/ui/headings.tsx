import { css, styled, Text } from '@tidy-ui/all';

const resetLinkStyle = css`
  color: inherit;
  background: none;
  transition: none;
  font: inherit;
`;

export const H1 = styled(Text.H4)`
  margin: 3.5rem 0 1.5rem 0;
  & > a {
    ${resetLinkStyle}
  }
`;

export const H2 = styled(Text.H4)`
  margin: 2rem 0 1.5rem 0;
  font-size: 2.5rem;
  & > a {
    ${resetLinkStyle}
  }
`;

export const H3 = styled(Text.H4)`
  margin: 2rem 0 1.2rem 0;
  font-size: 1.75rem;
  & > a {
    ${resetLinkStyle}
  }
`;

export const H4 = styled(Text.H4)`
  margin: 1.5rem 0 1rem 0;
  font-size: 1.2rem;
  & > a {
    ${resetLinkStyle}
  }
`;

export const H5 = styled(Text.H4)`
  margin: 1rem 0 0.75rem 0;
  font-size: 1rem;
  & > a {
    ${resetLinkStyle}
  }
`;

export const H6 = styled(Text.H4)`
  margin: 0.75rem 0 0.5rem 0;
  font-size: 0.75rem;
  & > a {
    ${resetLinkStyle}
  }
`;
