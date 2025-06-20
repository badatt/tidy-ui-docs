import React from 'react';
import { styled, css } from '@tidy-ui/all';
import { Typewriter } from 'react-simple-typewriter';

const Highlight = styled.span`
  ${({ theme: { palette } }) => css`
    background: linear-gradient(to right, ${palette.major[600]}, ${palette.minor[600]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const DynamicWord: React.FC = () => {
  return (
    <Highlight>
      <Typewriter
        words={['elegant', 'beautiful', 'simple', 'scalable', 'accessible', 'modular']}
        loop={0}
        typeSpeed={90}
        deleteSpeed={60}
        delaySpeed={1500}
      />
    </Highlight>
  );
};

export default DynamicWord;
