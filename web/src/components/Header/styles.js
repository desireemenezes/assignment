import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #003049;
  border-bottom: 5px solid #EE6B26;

  display: flex;
  overflow: auto;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 100px;
    height: 40px;
  }
  overflow: auto;

  /** small device */
  @media(max-width: 800px) {
    width: 50%;
  }
 
`

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
      background: none;
      border: none;
      cursor: pointer;
    }

    a, button {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
  

    &:hover{
      color: #EE6B26;
    } 

    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: #FFF;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
  }

  button {
    font-size: 16px;
  }

  /** small device */
  @media(max-width: 800px) {
  
    align-items: center;
    text-align: center;
    a, button {
      font-size: 13px;
    }
    .dividir::after {
      display: none;
    }
  }

`