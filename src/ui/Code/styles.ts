import { LiveEditor, LiveError, LivePreview } from 'react-live';
import { color, css, hsla, styled } from '@tidy-ui/commons';
import { Code as TCode } from '@tidy-ui/presentation';

export const Code = styled(TCode)`
  margin: 2rem 0 0 0;
  ${({ theme: { isDark } }) => css`
    & pre {
      background-color: ${isDark ? hsla(color.slate[900]) : hsla(color.slate[800])};
    }
  `}

  & svg {
    background-color: ${hsla(color.slate[700], 0.7)};
    color: ${hsla(color.slate[200])};
  }
`;

export const Editor = styled(LiveEditor)`
  & > pre {
    background-color: inherit !important;
  }
`;

export const Err = styled(LiveError)`
  ${({ theme: { font } }) => css`
    font-family: ${font.mono};
  `}
`;

export const Preview = styled(LivePreview)`
  //margin-bottom: 1rem;
`;
