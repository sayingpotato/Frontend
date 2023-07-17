import { StoreImagesDiv, ImagesDiv } from './style';

import Image from "@atoms/image"
import Text from "@atoms/text"

const StoreImages = ({images}) => {
    return (
        <>
            <StoreImagesDiv>
                <Text text="가게 사진" className="storeDetailMiniTitle"/>
                <ImagesDiv>
                    {images.map((item, index) => {
                        return(
                            <Image className="storeImage" key={index} src={item.storeImg} alt={item.storeImg} />
                        )
                    })}
                </ImagesDiv>    
            </StoreImagesDiv>
        </>
    );
};

export default StoreImages;