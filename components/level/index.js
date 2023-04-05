import { 
    LevelComponent, 
    BigLevel, 
    SmallLevel } from "./style"
import {DETAIL_TOTAL_LEVEL} from '@constants/register.js'
import { RegisterLevel } from "@utils/atom.js"
import { useRecoilState} from "recoil"
import { useEffect, useState } from "react";

export default function Level(){
    const [registerLevel, setRegisterLevel] = useRecoilState(RegisterLevel);
    const [bigLevelStatus, setBigLevelStatus] = useState([0, 0, 0]);
    const firstSmall = [3, 5, 5];
    const secondSmall = [0, 3, 5];

    useEffect(() => {
        switch (registerLevel) {
            case 0: setBigLevelStatus([1, 0, 0]); break;
            case 1: setBigLevelStatus([1, 1, 0]); break;
            case 2: setBigLevelStatus([1, 1, 1]); break;
        }
    },[registerLevel]);

    const smallLevel = (array, check) => {
        const value = check ? array[registerLevel] : DETAIL_TOTAL_LEVEL - array[registerLevel];
        
        return(
            [... new Array(value)].map((item, index) => {
                return (<SmallLevel 
                            status={check} 
                            key={index}/>)
            })
        )
    }
    
    return (
        <LevelComponent>
            <BigLevel level={bigLevelStatus[0]}>본인<br/>인증</BigLevel>
            {smallLevel(firstSmall, 1)}
            {smallLevel(firstSmall, 0)}
            <BigLevel level={bigLevelStatus[1]}>정보<br/>입력</BigLevel>
            {smallLevel(secondSmall, 1)}
            {smallLevel(secondSmall, 0)}
            <BigLevel level={bigLevelStatus[2]}>인증<br/>하기</BigLevel>
        </LevelComponent>
    )
}