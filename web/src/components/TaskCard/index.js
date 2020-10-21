import React , { useMemo }from 'react';
import { format } from 'date-fns';
import * as Styled from './styles'

import typeIcons from '../../utils/typeIcons';




function TaskCard( { type, title, when } ) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));


  return (
   <Styled.Container>
       <Styled.TopCard>
            <img src={typeIcons[type]} alt="Icone tarefa"></img>
            <h3>{title}</h3>
       </Styled.TopCard>

       <Styled.BottomCard>
           <strong>{date}</strong>
           <span>{hour}</span>
       </Styled.BottomCard>
   </Styled.Container>
  );
}

export default TaskCard;