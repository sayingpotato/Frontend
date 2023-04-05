import { MenuWholeDiv, MenuDiv, MenuName } from './style'

import Image from 'next/image'
import goldMedal from '@public/images/goldMedal.svg'
import silverMedal from '@public/images/silverMedal.svg'
import bronzeMedal from '@public/images/bronzeMedal.svg'

const StorelistMenu = (props) => {
  const menuList = JSON.parse(props.menu)
  return (
    <MenuWholeDiv>
      <MenuDiv>
        <Image
          width={20}
          height={20}
          src={goldMedal}
          className="goldMedal"
          alt="goldMedal"
        />
        <MenuName>{`${menuList['firstTopMenu']}`}</MenuName>
      </MenuDiv>
      <MenuDiv>
        <Image
          width={20}
          height={20}
          src={silverMedal}
          className="silverMedal"
          alt="silverMedal"
        />
        <MenuName>{`${menuList['secondTopMenu']}`}</MenuName>
      </MenuDiv>
      <MenuDiv>
        <Image
          width={20}
          height={20}
          src={bronzeMedal}
          className="bronzeMedal"
          alt="bronzeMedal"
        />
        <MenuName>{`${menuList['thirdTopMenu']}`}</MenuName>
      </MenuDiv>
    </MenuWholeDiv>
  )
}

export default StorelistMenu
