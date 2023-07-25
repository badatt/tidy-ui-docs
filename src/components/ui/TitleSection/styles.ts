import styled from 'styled-components';

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
`;

export const Title = styled.h2<StyledProps>`
`;

export const SubTitle = styled.h4<StyledProps>`
`;

export const Separator = styled.h2<StyledProps>`

  &:before {
    content: '';
  }

  &:after {
    content: '';
  }
`;
