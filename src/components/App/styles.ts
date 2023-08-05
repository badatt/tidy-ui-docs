import { createGlobalStyle } from 'styled-components';
import { color, hsla, ITheme, styled } from '@tidy-ui/commons';
import { Button } from '@tidy-ui/presentation';

export const GlobalStyle = createGlobalStyle<ITheme>`

  html {
    scroll-behavior: smooth;
  }

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

export const BackToTop = styled(Button)`
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin: 1rem;
  display: none;
  z-index: 99;
  color: ${hsla(color.gray[500])};
`;
