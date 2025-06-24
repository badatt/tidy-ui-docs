import { styled, hsla, color } from '@tidy-ui/all';

const HeroBg = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70vh;

  background-image: radial-gradient(
    circle at bottom center,
    ${hsla(color.purple[500], 0.5)} 0%,
    ${hsla(color.pink[500], 0.5)} 60%,
    transparent 100%
  );

  background-repeat: no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
  z-index: 0;

  mask-image: linear-gradient(to top, black 0%, transparent 100%);
`;

export default HeroBg;
