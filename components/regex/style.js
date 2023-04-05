import styled from "styled-components";

const RegexComponent = styled.div`
    display: flex ;
    gap: 8px;
    padding: 8px 0 16px 0;
`;

const RegexView = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${props => props.state ? '#28469C' : '#B8B8BA'};
    border-radius: 50%;
    margin-top: 3px;
`;

const RegexTitle = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.state ? '#28469C' : '#B8B8BA'};
`;

export {RegexComponent, RegexTitle, RegexView}