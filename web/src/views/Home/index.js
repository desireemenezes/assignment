import React, { useState, useEffect } from 'react'; 
// useState Retorna um valor e uma função para atualizar o valor.
// A função passada para useEffect será executada depois que a renderização estiver disponível na tela

import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all'); //crio constante de vetor com o nome do estado e a fun��o que atualiza o estado.
  const [tasks, setTasks] = useState([]); //contante de tarefas
  const [redirect, setRedirect] = useState(false); // redirecionamento do react-router-dom


  function Notification(){ // só notifica tarefas atrasadas
    setFilterActived('late');
  }

  useEffect(() => { // useEffect é chamado quando inicia a tela
    
  async function loadTasks(){ // carrego as tarefas passo no parametro o filtro e se ta ativa
      await api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data)
      })
    }

    if(!isConnected) // se tiver conectado eu carrego as tarefas
      setRedirect(true); 
    loadTasks();

  }, [filterActived])

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode"/> }
      
      <Header clickNotification={Notification}/>
      
      <S.FilterArea>
        <button type="button"        onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos"  actived={filterActived === 'all'}   />
        </button>
        <button type="button"        onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje"   actived={filterActived === 'today'} />
        </button>
        <button type="button"        onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === 'week'}  />
        </button>
        <button type="button"        onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'}  />
        </button>
        <button type="button"     onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === 'year'}  />
        </button>        
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS'  : 'TAREFAS'}</h3> 
      </S.Title>

      <S.Content> 
       {/* Importo o link do react router dom (passo a task e oid pra cada vez que eu clicar na tarefa ir para area da tarefa*/}
        {
          tasks.map(t => (
          <Link to={`/task/${t._id}`}>
            <TaskCard key={t._id} type={t.type} typeCategory={t.typeCategory} title={t.title} when={t.when} done={t.done} />    
          </Link>
          ))  
        }
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default Home;
