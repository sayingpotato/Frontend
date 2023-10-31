import styled from 'styled-components';

const Div = styled.div`
    display : flex;
    gap : 40px;
    margin-left : 10px;
    margin-right : 10px;
`

const ContentDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width : 100px;
    text-align : center;
    display : flex;
    flex-direction : column;
    gap : 3px;
`

export { Div, ContentDiv };