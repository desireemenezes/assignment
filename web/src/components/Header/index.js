import React from 'react';
import {Link} from 'react-router-dom';

import * as Styled from './styles'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header( {lateCount, clickNotification}) {
  return (
   <Styled.Container>

      <Styled.LeftSide>
        <Link to="/"> <img src={logo} alt="logo"></img></Link>
      </Styled.LeftSide>

      <Styled.RightSide>
        <Link to="/">INICIO</Link>
        <span className="divider"></span>
        <Link to="task">NOVA TAREFA</Link>
        <span className="divider"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="divider"></span>
        <button href="#" id="notification" onClick="">
          <img src={bell} alt="Notificação"></img>
          <span>{lateCount > 0 ? lateCount : '0'}</span>
        </button>
      </Styled.RightSide>

   </Styled.Container>
  );
}

export default Header;