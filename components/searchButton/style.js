import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.backGroundColor};
    color : ${props => props.color};
    border: 0;
    font-weight: 900;
    border-radius: 3px;
`;

export {Button}