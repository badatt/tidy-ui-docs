import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const MainNav = styled.nav<StyledProps>``;

export const MainNavItem = motion(styled(Link)`
  width: max-content;

  &.active {
  }

  &:before {
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`);

export const ToogleMainNav = styled.button<StyledProps>`
  outline: none !important;

  span {
    transition: 0.2s;

    &:first-child {
    }

    &:last-child {
    }

    &:nth-child(2) {
    }
  }
`;
