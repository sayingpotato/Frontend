import styled from 'styled-components';

const Div = styled.div`
    display : flex;
    gap : 10px;
    margin-left : 10px;
    margin-right : 10px;
    overflow-x: scroll;
`

const ContentDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    text-align : center;
    display : flex;
    flex-direction : column;
    gap : 3px;
    padding : 8px;
    height : 70px;
`

export { Div, ContentDiv };