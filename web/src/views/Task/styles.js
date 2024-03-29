import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
  display: flex;  
  flex-direction: column;
  align-items: center;
  
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 100px;
  /** small device */
  @media(max-width: 800px) {
    width: 90%;
  }

`

export const TypeIcons = styled.div`
  width: 100%;
  display: block;
  align-items: center;
  text-align: center;

  .inative{
    opacity: 0.5;
  }

  button {
    border: none;
    background: none;
  }
  
  img {
    width: 50px;
    height: 50px;
    margin-top: 15px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }

`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #707070;
    margin: 5px 0;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    font-size: 18px;
    padding: 8px 15px 5px 0;
    border: none;
    border-bottom: 1px solid #EE6B26;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 90%;  
    bottom: 30px;
  }

  select {
    padding: 10px;
    border: 1px solid #EE6B26;
    background: #fff;
    font-size: 18px;
  }

` 

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #707070;
    margin: 5px 0;
    font-size: 18px;
    font-weight: 600;
  }

  textarea {
    font-size: 18px;
    border: 1px solid #EE6B26;
  }
`


export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #003049;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;
  }

  @media(max-width: 800px) {
    div {
      font-size: 16px;
    }
    button {
      font-size: 16px;
    }
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button {
    width: 100%;
    background: #003049;
    border: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }

  @media(max-width: 800px) {
    button {
      background: #003049;
      border: none;
      font-size: 16px;
      color: #FFF;
      font-weight: bold;
      padding: 12px;
      border-radius: 30px;
      cursor: pointer;

      &:hover{
        opacity: 0.7;
      }
    }
  }


`