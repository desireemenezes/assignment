import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #003049;
    border-bottom: 5px solid #ee6b26;

    display: flex;

`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 130px;
        height: 50px;
    }

`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #f77f00;
        }
    }
    button {
        background: transparent;
        border: none;
    }

    #notification {
        img {
            width: 25px;
            height: 30px;
        }
        span {
            background-color: #fff;
            color: #f77f00;
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

    .divider::after{
        content: "|";
        margin: 0 10px;
        color: #fff;
    }
  
`