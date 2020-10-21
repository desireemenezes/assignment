import React from 'react';
import * as Styled from './styles'

import filter from '../../assets/filter.png'


function FilterCard( { title, actived }) {
  return (
   <Styled.Container actived={actived}>
       <img src={filter} alt="Filtro"></img>
       <span>{title}</span>
   </Styled.Container>
  );
}

export default FilterCard;