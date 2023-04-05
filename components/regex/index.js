import { 
    RegexComponent, 
    RegexTitle, 
    RegexView } from "./style"
import { 
    isEnglish, 
    isNumber, 
    isMoreThan,
    isSpecialCharacter,
    isKoreanEnglish } from "@hooks/regex";
import { useEffect, useState } from "react";
import { ID_LENGTH, PW_LENGTH, NickName_LENGTH } from "@constants/register";

export default function Regex(props){
    const [isValid, setIsValid] = useState(false);
    
    const sample = {
        'English' : {title : '영어', state : isValid},
        'Number' : {title : '숫자', state : isValid},
        'Eight' : {title : '8자 이상', state : isValid},
        'Six' : {title : '6자 이상', state : isValid},
        'Two' : {title : '2자 이상', state : isValid},
        'SpecialCharacter' : {title : '특수문자', state : isValid},
        'KoreanEnglish' : {title : '한글/영어', state : isValid}
    };

    useEffect(() => {
        props.onValidityChange(props.action, isValid);
    },[isValid, props.action, props])
    
    useEffect(() => {
        switch (props.action) {
            case 'English': setIsValid(isEnglish(props.input)); break;
            case 'Number': setIsValid(isNumber(props.input)); break;
            case 'Two': setIsValid(isMoreThan(props.input, NickName_LENGTH)); break;
            case 'Six': setIsValid(isMoreThan(props.input, ID_LENGTH)); break;
            case 'Eight': setIsValid(isMoreThan(props.input, PW_LENGTH)); break;
            case 'SpecialCharacter': setIsValid(isSpecialCharacter(props.input)); break;
            case 'KoreanEnglish': setIsValid(isKoreanEnglish(props.input)); break;
        }
    },[props.input, props.onValidityChange, props.action])
    
    return (
        <RegexComponent>
            <RegexView state={sample[props.action].state}/>
            <RegexTitle 
                state={sample[props.action].state}>
                {sample[props.action].title}</RegexTitle>
        </RegexComponent>
    )
}
