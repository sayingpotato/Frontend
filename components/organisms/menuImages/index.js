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
                    {menuData.map((item, index) => (
                        <MenuImagesContentDiv key={item.id}>
                            <ImagesDiv>
                            <Image src={item.img} alt={item.img} className="menuImage"/>
                                <MenuInfo name={item.name} price={item.price} rank={item.rank} />
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