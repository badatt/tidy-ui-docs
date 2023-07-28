import { styled } from '@tidy-ui/commons';

export const Nav = styled.nav`
  display: block;
  position: sticky;
  overscroll-behavior: contain;
  top: 80px;
  height: calc(100vh - 82px);
  overflow-y: auto;
  padding: 1rem 0;
`;
