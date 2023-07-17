import { ImageTitleDiv } from './style';

import Text from "@atoms/text";
import Image from "@atoms/image";

const ImageTitle = ({ imageClassName, textClassName, src, alt, text, onClick }) => {
    return (
        <ImageTitleDiv>
            <Image src={src} alt={alt} className={imageClassName} onClick={onClick}/>
            <Text className={textClassName} text={text} onClick={onClick}/>
        </ImageTitleDiv>
    );
};

export default ImageTitle;