import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

  width: 50%;

  h1 {
    color: #EE6B26;
  }
  p {
    color: #003049;
    text-align: center;
  }
  @media(max-width: 800px) {
    width: 90%;
    h1 {
      padding-top: 20px;
      font-size: 18px;
    }
    canvas {
      height: 200px !important;
      width: 200px !important;
      padding: 20px;
    }
  }

`

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  span{
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 15px;
    text-align: center;
    text-transform: none;
    color: #003049;
    font-weight: 600;;
  }

  input {
    font-size: 18px;
    padding: 10px;
    text-align: center;
  }

  button{
    font-weight: bold;
    background: #EE6B26;
    color: #FFF;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  @media(max-width: 800px) {
    span {
      padding-top: 20px;
      padding-bottom: 10px;
      font-size: 14px;
      text-align: center;
    }
    button{
      font-size: 13px;
      margin-top: 10px;
    }
   
  }
`