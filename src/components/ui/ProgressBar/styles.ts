import styled from 'styled-components';

export interface StyledProps {
  percentage: number;
}

export const ProgressBar = styled.div`
`;

export const BarWrapper = styled.div`
`;

export const Bar = styled.div<StyledProps>`
  width: ${({ percentage }) => `${percentage}%`};
`;

export const Content = styled.div`
`;

export const Title = styled.h3`
`;

export const Percentage = styled.h3`
`;
