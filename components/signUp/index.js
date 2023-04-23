import { 
    SignUpComponent, 
    TitleTop, 
    TitleUnder } from "./style"

export default function SignUp({title, subTitle}){
    return (
        <>
            <SignUpComponent>
                <TitleTop>{title}</TitleTop>
                <TitleUnder>
                    <div className='description'>{subTitle}</div>
                    <div className='logo'>감자입니다</div>
                </TitleUnder>
            </SignUpComponent>
        </>
    )
}