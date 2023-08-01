import { createGlobalStyle } from 'styled-components';
import { color, hsla, ITheme } from '@tidy-ui/commons';

export const GlobalStyle = createGlobalStyle<ITheme>`

  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 80px;
  }

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
