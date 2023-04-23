import Image from 'next/image'
import logoSrc from '@public/images/potato.svg'

import {
    ContentDiv, 
    Title,
    Name
} from './style'

const Splash = () => {
    const title1 = "\"전 그냥 말하는 감자라구요.";
    const title2 = "아시겠어요?\""

    return (
        <ContentDiv>
            <Title>{title1}</Title>
            <Title>{title2}</Title>
            <Image src={logoSrc} alt="logo" width="100" height="100"/>
            <Title>할인해주셔서 감자합니다..</Title>
            <Name>감자입니다</Name>
        </ContentDiv>
    );
}

Splash.Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Splash.Layout.displayName = 'SplashLayout';

export default Splash;