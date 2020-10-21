import React from 'react';
import * as Styled from './styles'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header() {
  return (
   <Styled.Container>

      <Styled.LeftSide>
        <img src={logo} alt="logo"></img>
      </Styled.LeftSide>

      <Styled.RightSide>
        <a href="#">INICIO</a>
        <span className="divider"></span>
        <a href="#">NOVA TAREFA</a>
        <span className="divider"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="divider"></span>
        <a href="#" id="notification">
          <img src={bell} alt="Notificação"></img>
          <span>5</span>
        </a>
      </Styled.RightSide>

   </Styled.Container>
  );
}

export default Header;