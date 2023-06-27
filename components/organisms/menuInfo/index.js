import { MenuInfoDiv } from './style';

import Image from "@atoms/image"
import InlineText from '@molecules/inlineText';

const MenuInfo = ({name, price, rank}) => {

    return (
        <MenuInfoDiv>  
            <Image src={rank} alt={rank} />
            <InlineText textOne={name} textTwo={price} textOneClassName="storeDetailMenuTitle" textTwoClassName="storeDetailPrice" />
        </MenuInfoDiv>
    );
};

export default MenuInfo;