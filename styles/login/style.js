import styled from "styled-components";

const LoginComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top:28px;
    flex-grow: 1;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
`;

const Input = styled.input`
    width: 264px;
    border-radius: 16px;
    padding: 20px;
    border: none;
    background-color: #F4F4F4;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-family: 'Pretendard Variable';
        font-weight: 600;
    }
`;

const LoginButton = styled.button`
    width: 264px;
    border-radius: 16px;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 12px;
    border: none;
    background-color: ${props => props.state ? '#28469C':'#B0B0B0'};
    color: white;
    box-sizing: content-box;
`;

const RegisterComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    p {
        color: #7B7B7B;
        font-weight: 500;
        margin:8px;
    }
`;

const RegisterButton = styled(LoginButton)`
    background-color: white;
    color: #747474;
    border: 1px solid #7B7B7B;
`;

const Find = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: #7B7B7B;
    margin-bottom: 24px;
    font-size: 14px;
`;

const TotalLogin = styled.div`
    display: flex;
    flex-direction: column;
    height: 100svh;
`;

export {LoginComponent, Main, Input, LoginButton, RegisterButton, Find, RegisterComponent, TotalLogin}