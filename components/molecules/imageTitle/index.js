import { ImageTitleDiv } from './style';

import Text from "@atoms/text";
import Image from "@atoms/image";

const ImageTitle = ({ imageClassName, textClassName, src, alt, text }) => {
    return (
        <ImageTitleDiv>
            <Image src={src} alt={alt} className={imageClassName}/>
            <Text className={textClassName} text={text} />
        </ImageTitleDiv>
    );
};

export default ImageTitle;