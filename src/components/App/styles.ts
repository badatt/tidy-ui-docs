import { createGlobalStyle } from 'styled-components';
import { color, hsla, ITheme } from '@tidy-ui/commons';

export const GlobalStyle = createGlobalStyle<ITheme>`
  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { isDark } }) => (isDark ? hsla(color.gray[600], 0.5) : hsla(color.gray[400], 0.5))}; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: ${({ theme: { isDark } }) => (isDark ? hsla(color.gray[600]) : hsla(color.gray[400]))}; 
  }
`;
