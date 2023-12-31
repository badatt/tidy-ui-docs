import { styled } from '@tidy-ui/all';

export const Header = styled.header`
  display: flex;
  top: 0px;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  position: sticky;
  height: 80px;
  background: ${({ theme: { palette } }) => palette.background.default};
`;
