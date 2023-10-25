import { useState, useRef, useEffect } from "react";
import Register from "@pages/register";
import {RegisterLevel, StudentCard} from "@utils/recoil/atom";
import { useRecoilState, useSetRecoilState} from "recoil";
import Label from "@components/label";
import { InfoComponent } from '@styles/register/info/id/style';
import Image from "next/image";
import preview from '@public/images/studentPreview.svg'
import Next from "@components/next";

export default function College(){
    const setRegisterLevel = useSetRecoilState(RegisterLevel);
    const [state, setState] = useState(0);
    const [imageSource, setImageSource] = useRecoilState(StudentCard);
    const [alterImage, setAlterImage] = useState();
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
        const imageUrl = e.target.files[0];
        const alterImageUrl = URL.createObjectURL(imageUrl);
        setImageSource(imageUrl);
        setAlterImage(alterImageUrl);
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
                    src={alterImage?alterImage:preview}
                    alt='이미지 미리보기'/>    
            </InfoComponent>
            <Next
                input = {imageSource}
                state = {state}
                nextView={"student"}/>
        </Register>
    )
    
}

College.Layout = ({ children }) => {
    return (
       <div>
        {children}
       </div>
    );
};
  
College.Layout.displayName = 'RegisterLayout';