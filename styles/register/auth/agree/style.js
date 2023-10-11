import styled from "styled-components";

const AgreeComponent = styled.div`
    padding: 4px 16px 4px 24px;
    Label {
        margin-bottom: 16px;
    }
`;

const OneAgree = styled.div`
    font-size: 16px;
    font-weight: 800;
    color: ${props => props.state ? '#28469C' : 'gray'};
    display: flex;
    align-items: center;
    padding: 8px 0 8px 0;
    
    .agreeIcon {
        margin-right: 12px;
    }
`;
export {AgreeComponent, OneAgree}
