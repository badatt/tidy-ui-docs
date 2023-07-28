import * as React from 'react';
import * as Styled from './styles';

const MainNav: React.FC = () => {
  return (
    <Styled.Nav>
      {[...Array(100)].map((v, i) => (
        <div key={i}>{i} lorem ipsum</div>
      ))}
    </Styled.Nav>
  );
};

export default MainNav;
