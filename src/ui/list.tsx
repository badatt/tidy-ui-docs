import { createFontStyle, styled } from '@tidy-ui/all';

export const Ul = styled.ul`
  list-style-type: disc;
  margin-left: 1.25rem;
  * + * {
    margin-top: 0.5rem;
  }
  margin-bottom: 1rem;
`;

export const Ol = styled.ol`
  list-style-type: decimal;
  margin-left: 1.25rem;
  * + * {
    margin-top: 0.5rem;
  }
  margin-bottom: 1rem;
`;

export const Li = styled.li`
  ${createFontStyle('body1')}//padding-bottom: 0.5rem 0;
`;
