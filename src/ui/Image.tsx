import * as React from 'react';
import type { Props } from '@mdx-js/react/lib';
import { createFontStyle, css, styled } from '@tidy-ui/all';

interface ImageProps extends Props, React.ImgHTMLAttributes<HTMLImageElement> {}

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2rem 8rem;
  padding: 1rem;
  transition: transform 0.4s;
  :hover {
    transform: scale(1.02);
  }
`;
const Caption = styled.figcaption`
  padding: 0.5rem 0;
  ${createFontStyle('caption')}
`;
const Img = styled.img`
  height: auto;
  ${({ theme: { layout } }) => css`
    border-radius: ${layout.radius};
    box-shadow: ${layout.shadow};
  `}
`;

const Image: React.FC = (props: ImageProps) => {
  const { alt, src, title } = props;
  return (
    <Figure>
      <Img {...{ alt, src, title }} loading="lazy" />
      <Caption>{title}</Caption>
    </Figure>
  );
};

export default Image;
