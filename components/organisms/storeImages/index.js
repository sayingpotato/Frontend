import { StoreImagesDiv, ImagesDiv } from './style';

import Image from "@atoms/image"
import Text from "@atoms/text"

const StoreImages = ({images}) => {

    let imageData = images[0]

    return (
        <>
            <StoreImagesDiv>
                <Text text="가게 사진" className="storeDetailMiniTitle"/>
                <ImagesDiv>
                    <Image src={imageData['image1']} alt="images/storeImage.svg" />
                    <Image src={imageData['image2']} alt="images/storeImage.svg" />
                    <Image src={imageData['image3']} alt="images/storeImage.svg" />
                    <Image src={imageData['image4']} alt="images/storeImage.svg" />
                </ImagesDiv>    

            </StoreImagesDiv>
        </>
    );
};

export default StoreImages;