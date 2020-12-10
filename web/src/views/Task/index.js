import React, { useState, useEffect } from 'react';
import {Input} from 'reactstrap';
import {Redirect} from 'react-router-dom'
import * as S from './styles';
import {format} from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task({match}) { // propridade para dar macth na tarefa pelo id

  const [redirect, setRedirect] = useState(false);
  const [typeCategoryS, setCategorys] = useState([]);

  const [type, setType] = useState();
  const [typeCategory, setCategory] = useState();
  const [done, setDone] = useState(false); // por default crio como falso pra deixar concuído somente quando marcar
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  async function Save(){
    //Validação dos dados
    if(!title)
      return alert("Você precisa informar o título da terefa")
    else if(!description)
      return alert("Você precisa informar a descrição da terefa")
    else if(!type)
      return alert("Você precisa selecionar o tipo da terefa")
    else if(!date)
      return alert("Você precisa definir a data da terefa")
    else if(!hour)
      return alert("Você precisa definir a hora da terefa")


    if(match.params.id){ //verifico se tem id pra atualizar se não é pra criar
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConnected,
        done,
        type,
        typeCategory,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => 
        setRedirect(true)
      )

    }else{
      await api.post('/task', {
        macaddress: isConnected,
        type,
        typeCategory,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => 
          setRedirect(true)
      ).catch(response => {
        alert(response.data.error)
      })
    }
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res === true){
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {

    async function LoadTaskDetails(){ //Ccarrego os detalhes da rota de  tarefas pelo id da url
      await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setCategory(response.data.typeCategory)
        setDone(response.data.done)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
        setHour(format(new Date(response.data.when), 'HH:mm'))
      })
    }

    async function LoadCategory(){ //carrefo por categoria 
      await api.get(`/type/filter/all`)
      .then(response => {
        setCategorys(response.data);
  
        })
    }

    if(!isConnected)
      setRedirect(true);
      LoadTaskDetails();
      LoadCategory();
  }, [match.params.id])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }
      <Header />    

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => ( //pego o incide do vetor e substituo a imagem
             index > 0 && 
             <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa" 
                className={type && type !== index && 'inative'}/> 
             </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da terefa..." 
          onChange={e => setTitle(e.target.value)} value={title} />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da tarefa..." 
          onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da terefa..." 
          onChange={e => setDate(e.target.value)} value={date} />
         
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da terefa..." 
          onChange={e => setHour(e.target.value)} value={hour}/>
        
        </S.Input>

      
        <S.Input>
        <span>Categoria</span>
          <Input type="select" name="select" id="exampleSelect" oonChange={(e) => setCategory(e.target.value)}>
          { typeCategoryS.map(typeCategorys => (
              <option key={typeCategorys.id} value={typeCategorys.id} label={typeCategorys.typeCategory}></option>  
              )) 
          }
          </Input>
          </S.Input>
        
        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </div>
        { match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button> }
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>

      <Footer/>
    </S.Container>
  )
}

export default Task;
