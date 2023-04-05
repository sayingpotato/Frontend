import styled from "styled-components";

const LevelComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 8px 16px;
`;

const BigLevel = styled.div`
    text-align: center;
    background-color: ${props => props.level ? '#28469C' :' #D9D9D9'};
    color: white;
    border-radius: 50%;
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    font-weight: 600;
`;

const SmallLevel = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${props => props.status ? '#28469C' :' #D9D9D9'};
`;

export {LevelComponent, BigLevel, SmallLevel};