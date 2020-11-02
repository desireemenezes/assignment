import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }  
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    border-bottom: 2px solid #003049;

    h3 {
        color: #003049;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 10px;
    }

`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        text-decoration: none;
        color: black;
    }

`