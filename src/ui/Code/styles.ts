import { LiveEditor, LiveError, LivePreview } from 'react-live';
import scStyled from 'styled-components';
import { Code as TCode, color, css, hsla, styled } from '@tidy-ui/all';

export const Code = styled(TCode)`
  ${({ theme: { isDark } }) => css`
    & pre {
      background-color: ${isDark ? hsla(color.slate[900]) : hsla(color.slate[200])};
    }

    & svg {
      background-color: ${isDark ? hsla(color.slate[800]) : hsla(color.slate[50])};
      color: ${isDark ? hsla(color.slate[400]) : hsla(color.slate[600])};
    }
  `}
  width: 100%;
`;

export const Editor = scStyled(LiveEditor)`
  & > pre {
    background-color: inherit !important;
  }
`;

export const Err = styled(LiveError)`
  ${({ theme: { font } }) => css`
    font-family: ${font.mono};
  `}
`;

export const VsCodeWindowBtn = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
`;

export const Preview = styled(LivePreview)`
  height: 100%;
  padding: 1rem;
  background-size: 8px 8px;
  ${({ theme: { isDark, layout } }) => css`
    border-radius: ${layout.radius};
    background-image: radial-gradient(
      circle,
      ${isDark ? hsla(color.slate[700], 0.5) : hsla(color.slate[400], 0.5)} 1px,
      transparent 1px
    );
    box-shadow: ${layout.shadow};
    background-size: 8px 8px;
    background-color: ${isDark ? hsla(color.slate[900]) : hsla(color.slate[200])};
  `}
`;
