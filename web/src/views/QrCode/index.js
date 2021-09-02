import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react'; //react qrcode biblioteca


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac(){
    if(!mac)
      alert('Você precisa informar o número que apareceu no celular!');
    else{
      await localStorage.setItem('@todo/macaddress', mac); //SALVO NA PROPRIEDADE QUE É ARMAZENADA DENTRO DO NAVEGADOR
      setRedirect(true);
      window.location.reload();
    }
  }


  return (
    <S.Container>
      { redirect && <Redirect to="/"/> }
      <Header/>

      <S.Content>
        <h1>CAPTURE O QRCODE PELO CELULAR</h1>
        <p>Suas atividades serão sincronizadas com a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value='123' size={300}/>
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
          <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
        </S.ValidationCode>
      </S.Content>



      <Footer/>
    </S.Container>
  )
}

export default QrCode;
