import { color, css, hsla, styled } from '@tidy-ui/all';

export const Prop = styled.span`
  display: inline-block;
  border-radius: 4px;
  padding: 0 0.2em;
  line-height: 1.5em;
  ${({ theme: { isDark, font } }) => css`
    font-family: ${font.mono};
    background-color: ${isDark ? hsla(color.sky[600], 0.8) : hsla(color.sky[600])};
    color: ${hsla(color.cyan[50])};
  `}
`;
