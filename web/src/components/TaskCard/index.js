import React from 'react';
import * as Styled from './styles'

import iconDEfault from '../../assets/default.png'


function TaskCard() {
  return (
   <Styled.Container>
       <Styled.TopCard>
            <img src={iconDEfault} alt="Icone tarefa"></img>
            <h3>Título da tarefa</h3>
       </Styled.TopCard>

       <Styled.BottomCard>
           <strong>17/10/200</strong>
           <span>10:00</span>
       </Styled.BottomCard>


   </Styled.Container>
  );
}

export default TaskCard;