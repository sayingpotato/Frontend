import { BackComponent } from "./style"
import Router from "next/router";
import Image from "next/image";

export default function Back(){
    
    const onClickBack = () => {
        Router.back();
    }
    
    return (
        <>
            <BackComponent>
                <Image 
                    src = 'https://user-images.githubusercontent.com/44117975/226276985-3b1e269e-bf2a-470b-9c65-953b62149fbd.svg'
                    width={42}
                    height={42}
                    alt = 'back-arrow'
                    onClick={onClickBack}/>
            </BackComponent>
        </>
    )
}