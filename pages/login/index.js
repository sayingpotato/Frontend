import { useEffect, useState } from "react";
import Back from "@components/back";
import SignUp from "@components/signUp";
import Router from "next/router";
import { 
    Input,
    Main,
    LoginComponent,
    LoginButton,
    RegisterButton,
    Find,
    RegisterComponent,
TotalLogin } from "./style";
import Line from "@components/line";
import useLogin from "@hooks/useLogin";

const Login = () => {
    const [state, setState] = useState(false);
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [post, setPost] = useState(0);
    const login = useLogin(inputId, inputPw);

    useEffect(() => {
        if (!post) return ;
        login();
    }, [post]);
    
    useEffect(() => {
        if (inputId && inputPw) {
            setState(true);
            return;
        }
        setState(false);
    },[inputId, inputPw])
    
    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    
    const onChangePw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLoginButton = () => {
        setPost(post + 1);
    }

    const onClickRegisterButton = () => {
        Router.push('/register');
    }
    
    return (
        <TotalLogin>
            <Back/>
            <SignUp 
                title={'LOG IN'}
                subTitle={'로그인이 필요한 서비스입니다'}/>
            <LoginComponent>
                <Main>
                    <Input
                        onChange={onChangeId}
                        placeholder='ID'/>
                    <Input
                        onChange={onChangePw}
                        type='password'
                        placeholder='PW'/>
                    <LoginButton 
                        state={state}
                        onClick={onClickLoginButton}>
                        로그인
                    </LoginButton>
                    <Find>
                        <p>아이디 찾기</p>
                        <p>비밀번호 찾기</p>
                    </Find>
                </Main>
            </LoginComponent>
            <Line/>
            <RegisterComponent>
                <p>회원이 아니신가요?</p>
                <RegisterButton 
                    onClick={onClickRegisterButton}>회원가입</RegisterButton>
            </RegisterComponent>
        </TotalLogin>
    )
}

Login.Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Login.Layout.displayName = 'LoginLayout';

export default Login