import { 
    SignUpComponent, 
    TitleTop, 
    TitleUnder } from "./style"

export default function SignUp(){
    return (
        <>
            <SignUpComponent>
                <TitleTop>SIGN UP</TitleTop>
                <TitleUnder>
                    <div className='description'>감자가 되어봅시다!</div>
                    <div className='logo'>감자입니다</div>
                </TitleUnder>
            </SignUpComponent>
        </>
    )
}