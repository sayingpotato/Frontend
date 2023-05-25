import { StyledImageTextDiv } from './style';

import Text from "@atoms/text"
import Image from "@atoms/image"

const ImageText = ({src, alt, text, textClass}) => {
    return (
        <StyledImageTextDiv>
            <Image src={src} alt={alt}/>
            <Text text={text} className={textClass}/>
        </StyledImageTextDiv>
    );
};

export default ImageText;