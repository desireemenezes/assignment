import styled from 'styled-components';


export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;
    color: #003049;
  /*   background-color: #20295f;
    border-top: 5px solid #ee6b26;

    position: fixed;
    bottom: 0; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    &:hover {
        cursor: pointer;
        transition: all 0.3 ease;
        opacity: 0.5;
    }
`
export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const BottomCard = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
    
    strong {
        color: #ee6b26;
    }

    span {
        color: #707070;
    }

  

`
