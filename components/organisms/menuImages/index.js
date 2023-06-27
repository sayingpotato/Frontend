import { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv } from './style';

import Image from "@atoms/image"
import MenuInfo from '@organisms/menuInfo'
import Text from "@atoms/text"

const MenuImages = ({menuData}) => {


    return (
        <>
            <MenuImagesDiv>
                <Text text="메뉴판" className="storeDetailMiniTitle" />
                <MenuWholeImagesDiv>
                    {Object.entries(menuData).map(([key, value], index) => (
                        <MenuImagesContentDiv key={key}>
                            <ImagesDiv>
                                <Image src={value.src} alt={value.src} />
                                <MenuInfo name={value.name} price={value.price} rank={value.rank} />
                            </ImagesDiv>
                            {((index + 1) % 3 === 0) && <br />}
                        </MenuImagesContentDiv>
                    ))}
                </MenuWholeImagesDiv>
            </MenuImagesDiv>
        </>
    );
};

export default MenuImages;