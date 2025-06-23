import { styled, hsla, color } from '@tidy-ui/all';

const HeroBg = styled.div`
  height: 50vh;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-blend-mode: screen;
  background-image:
    linear-gradient(to top left, ${hsla(color.purple[500], 0.6)} 0%, transparent 100%),
    linear-gradient(to top right, ${hsla(color.pink[500], 0.6)} 0%, transparent 100%);
  background-repeat: no-repeat;
  background-size: 100% 50vh;
  background-position: bottom;
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
`;

export default HeroBg;
