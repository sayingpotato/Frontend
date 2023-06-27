import { StyledImageTextDiv } from './style';

import Text from "@atoms/text"
import Image from "@atoms/image"

const ImageText = ({src, alt, text, textClassName, divClassName, imageClassName}) => {
    return (
        <StyledImageTextDiv className={divClassName}>
            <Image src={src} alt={alt} className={imageClassName}/>
            <Text text={text} className={textClassName}/>
        </StyledImageTextDiv>
    );
};

export default ImageText;