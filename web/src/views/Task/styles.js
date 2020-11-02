import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    
`   
export const TypeIcons = styled.div`
    width: 100%;

    .inative {
        opacity: 0.2;
    }

    button {
        border: none;
        background: transparent;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
   
`   

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    .fift {
        width: 50%;  
    }

    span {
        color: #707070;
        margin-bottom: 5px;
    }

    input {
        font-size: 16px;
        padding: 10px;
        border-radius: 5px;
        border-color: #ee6b26;
        
    }

`
export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }

    textarea {
        font-size: 16px;
        padding: 10px;
        border-color #ee6b26; 
    }

`
export const Options = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        color: #ee6b26; 
        font-weight: bold;
        font-size: 18px;

    }

    button {
        font-weight: bold;
        border: none;
        color: #003049;
        cursor: pointer;
        background: none;
        font-size: 18px;

        &:hover {
            opacity: 0.7;
        }

    }
    
`

export const Save = styled.div`
    width: 100%;

    button {
        margin-top: 15px;
        width: 100%;
        font-weight: bold;
        border: none;
        cursor: pointer;
        color: #fff;
        background: #003049;;
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;

        &:hover {
            opacity: 0.7;
        }

    }
    
`