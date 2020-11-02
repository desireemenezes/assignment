import React , { useState, useEffect } from 'react';
import * as Style from './styles';
import { format } from 'date-fns';


import api from  '../../services/api';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task({match}) {

  const [lateCount, setLateCount] = useState();
 
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false); // come�a como tarefa n� constru�da
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState(['00-88-14-4D-4C-FB']);

  async function lateVerify(){
    await api.get(`/task/filter/late/00-88-14-4D-4C-FB`)// interpolação de acento
    .then(response => {
        setLateCount(response.data.lenght);       
    })
  }

  async function LoadTask () {
    await api.get(`/task/${match.params.id}`)
    .then(response => {
        setType(response.data.type);     
        setTitle(response.data.title);   
        setDescription(response.data.description); 
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
        setHour(format(new Date(response.data.when), 'HH:mm'));
    })
       
  }

  async function Save() {
      await api.post('/task', {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() =>
          alert('tarefa cadastrada')
      )
  }

  useEffect(() =>{
    lateVerify();
    LoadTask();
    Save();
  }, [])


  return (
    <Style.Container>
      <Header  lateCount={lateCount} clickNotification={Notification}/>

        <Style.Form>
            <Style.TypeIcons>
                {
                    TypeIcons.map( (icon, index) => (
                        index > 0 && 
                        <button type="button" onClick={() => setType(index)}>
                            <img src={icon} alt="Tipo tarefa" className={ type && type != index && 'inative'}/>
                        </button>
                    ))
                }
            </Style.TypeIcons>

            <Style.Input>
                <span>Título da tarefa</span>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
            </Style.Input>

            <Style.TextArea>
                <span>Descrição</span>
                <textarea rows={5} placeholder="Detalhes da tarefa..." 
                 onChange={e => setDescription(e.target.value)} value={description}/>
            </Style.TextArea>

            <Style.Input className="fift">
                <span>Data</span>
                <input type="date" onChange={e => setDate(e.target.value)} value={date} />
            </Style.Input>

            <Style.Input className="fift">
                <span>Hora</span>
                <input type="time" onChange={e => setHour(e.target.value)} value={hour} />
            </Style.Input>

            <Style.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                    <span>Concluído</span>
                </div>
                <button type="button">Excluir</button>
            </Style.Options>

            <Style.Save>
                <button type="button"onClick={Save}> Salvar</button>
            </Style.Save>

        </Style.Form>

      <Footer />
    </Style.Container>
  );
}

export default Task;
