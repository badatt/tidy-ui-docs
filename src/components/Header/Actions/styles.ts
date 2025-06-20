import { Button, color, hsla, styled } from '@tidy-ui/all';

export const IconBtn = styled(Button)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  color: ${hsla(color.slate[500])};
  :hover {
    background-color: ${({ theme: { isDark } }) => (isDark ? hsla(color.gray[700]) : hsla(color.gray[300]))};
  }
`;
