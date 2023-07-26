import { color, hsla, styled } from '@tidy-ui/commons';
import { Button } from '@tidy-ui/presentation';

export const IconBtn = styled(Button)`
  font-size: 1.2rem;
  padding: 0;
  color: ${hsla(color.slate[500])};
  :hover {
    background-color: ${({ theme: { isDark } }) => (isDark ? hsla(color.gray[700]) : hsla(color.gray[300]))};
  }
`;
