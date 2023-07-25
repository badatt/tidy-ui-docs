import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion(styled.button<StyledProps>`
  outline: none !important;
`);
