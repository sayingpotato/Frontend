import styled from "styled-components";

const NextComponent = styled.div`
    position: absolute;
    text-align: center;
    padding: 16px 0 0 0;
    margin-top: 4px;
    bottom: 0;
    height: 40px;
    width: 100vw;
    font-weight: 700;
    color: white;
    background-color: ${props => props.state === 2? '#28469C' : '#B0B0B0'};
`;

export {NextComponent};