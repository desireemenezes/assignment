import React , { useState, useEffect } from 'react';
import * as Style from './styles'

import api from  '../../services/api';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  // nome do estado, função que atualizad o estado
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] =  useState([]);
  const [lateCount, setLateCount] = useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/00-88-14-4D-4C-FB`)// interpolação de acento
    .then(response => {
        setTasks(response.data);
        console.log(response.data);
    })
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/00-88-14-4D-4C-FB`)// interpolação de acento
    .then(response => {
        setLateCount(response.data.lenght);       
    })
  }

  function Notification(){
    setFilterActived('late');
  }


  useEffect(() =>{
    loadTasks();
    lateVerify();
  }, [filterActived])


  return (
    <Style.Container>
      <Header  lateCount={lateCount} clickNotification={Notification}/>
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

      <Style.Title>
  <   h3>{ filterActived === 'late'? 'TAREFAS ATRASADAS': 'TAREFAS'}</h3>
      </Style.Title>

      <Style.Content>
        { tasks.map(task => (
          <TaskCard type={task.type}  title={task.title} when={task.when}/> 
          ))
        }
      </Style.Content>
      <Footer />
    </Style.Container>
  );
}

export default Home;
