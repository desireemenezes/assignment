import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
`

export const FilterArea = styled.div`
  
  display: flex;
  justify-content: space-around;  
  margin-top: 30px;
  z-index: 0000;
  overflow: hidden;

  button {
    background: none;
    border: none;
  }

  /** small device */
  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
    button {
    padding-bottom: 10px;
  }
  }
`

export const Content = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;

  a {
    text-decoration: none;  
    color: #000;
  }
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #003049;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3{
      color: #003049;
      position: relative;
      top: 30px;
      background: #FFF;
      padding: 0 20px;
    }
`