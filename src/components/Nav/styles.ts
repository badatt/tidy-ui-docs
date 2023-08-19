import { Link } from 'gatsby';
import { color, createFontStyle, css, hsla, styled } from '@tidy-ui/all';
import Icon from 'ui/Icon';

export const Nav = styled.nav`
  display: block;
  position: sticky;
  overscroll-behavior: contain;
  top: 80px;
  height: calc(100vh - 82px);
  overflow-y: auto;
  padding: 2rem 0;
  overflow: hidden;

  :hover {
    overflow-y: scroll;
  }
`;

export const MainLinkIcon = styled(Icon)`
  ${({ theme: { palette } }) => css`
    color: ${palette.major[500]};
    border-radius: 4px;
    border: 1px solid ${hsla(color.slate[500], 0.2)};
    padding: 0.2rem;
  `}
`;

export const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${({ theme: { palette, font } }) => css`
    color: ${palette.text.secondary};
    font-weight: ${font.bold};
    :hover {
      color: ${palette.text.primary};
    }
    &.active {
      color: ${palette.major[500]};
      ${MainLinkIcon} {
        color: white;
        background-color: ${palette.major[500]};
        border: 1px solid transparent;
      }
    }
  `}
`;

export const ComponentLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 0.5rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  ${({ theme: { isDark, font, palette } }) => css`
    color: ${palette.text.primary};
    :hover {
      background-color: ${hsla(color.pink[500], 0.1)};
    }
    &.active {
      color: ${isDark ? palette.minor[400] : palette.minor[700]};
      background-color: ${hsla(color.pink[500], 0.3)};
      font-weight: ${font.bold};
    }
  `}
`;

export const TocGroup = styled.ul`
  padding: 0.5rem 0 0 0.75rem;
`;

export const TocItem = styled.li`
  ${createFontStyle('body2')}
  color: ${hsla(color.gray[500])};
`;

export const TocActiveItem = styled.li`
  ${createFontStyle('body2')}
  ${({ theme: { font, palette } }) => css`
    font-weight: ${font.bold};
    color: ${palette.minor[500]};
  `}
`;
