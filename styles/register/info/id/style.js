import styled from "styled-components";

const InfoComponent = styled.div`
    padding: 4px 16px 16px 24px;
    position: relative ;
    .close {
        position: absolute ;
        top:32px;
        right: 20px;
        margin-top: 10px;
    }

    .right {
        padding-top: 8px;
        margin-left: auto;
    }

    .imagePreview {
        width: 200px;
        height: 200px;
        margin-top: 16px;
    }
    height : 70px;
`;

const RegexComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 32px;
`;

const InputSpace = styled.input`
    border: 0px solid #D9D9D9;
    border-bottom: 2px solid ${props => props.state === 2? '#387D04' : props.state === 1 ? '#FF0000' : '#D9D9D9'};
    height: 25px;
    width: 98%;
    &:focus-visible {
        font-family: 'Pretendard Variable';
        outline : none;
        font-weight: 600;
    }
    
`;

export {InfoComponent, RegexComponent, InputSpace};
