import { useState, useRef, useEffect } from "react";
import Register from "@pages/register";
import { RegisterLevel } from "@utils/atom.js";
import { useSetRecoilState} from "recoil";
import Label from "@components/label";
import { InfoComponent } from '@pages/register/info/id/style';
import Image from "next/image";
import preview from '@public/images/studentPreview.svg'
import Next from "@components/next";

College.Layout = ({ children }) => {
    return (
       <div>
        {children}
       </div>
    );
};
  
College.Layout.displayName = 'RegisterLayout';
export default function College(){
    const setRegisterLevel = useSetRecoilState(RegisterLevel)
    const [state, setState] = useState(0);
    const [imageSource, setImageSource] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        setRegisterLevel(2);
    },[])

    useEffect(() => {
        if (imageSource) {
            setState(2);
            return ;
        }
        setState(0);
    },[imageSource])

    const onClickImage = () => {
        inputRef.current.click();
    }

    const onChangeFile = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImageSource(imageUrl);
    }

    return (
        <Register>
            <InfoComponent>
                <Label 
                    title={'학생증 인증'}/>
                    <input  
                        type='file'
                        onChange={onChangeFile}
                        style={{display : 'none'}}
                        ref={inputRef}/>
                <Image 
                    width={40}
                    height={40}
                    onClick={onClickImage}
                    className="imagePreview"
                    src={imageSource?imageSource:preview}
                    alt='이미지 미리보기'/>    
            </InfoComponent>
            <Next
                state = {state}/>
        </Register>
    )
    
}
