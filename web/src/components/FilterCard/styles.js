import styled from 'styled-components';


export const Container = styled.div`
    width: 260px;
    height: 60px;
    background-color: ${props => props.actived ? '#ee6b26' : '#20295f'};
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 30px;
        height: 30px;
    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background-color: #ee6b26;
        
    }
   
`
