import React , { useState } from 'react';
import * as Style from './styles'



//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  // nome do estado, função que atualizad o estado
  const [filterActived, setFilterActived] = useState();
  return (
    <Style.Container>
      <Header />
      <Style.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>
        <button  type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === 'today'}/>
        </button>
        <button otype="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === 'week'} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === 'year'} />
        </button>
      </Style.FilterArea>
      <Footer />
    </Style.Container>
  );
}

export default Home;
