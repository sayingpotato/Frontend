import { useState, useEffect } from 'react'
import { useRecoilState } from "recoil";

import Title from '@components/title'
import Image from '@atoms/image'
import search from '@public/images/searchBlack.svg'
import cancel from '@public/images/cancelBlack.svg'
import { useDebounce } from '@hooks/debounce'
import { 
    SearchDiv, 
    FirstSearchDiv, 
    SecondSearchDiv, 
    StoreName, 
    MenuName, 
    SearchTag,
    StoreNameList,
    MenuNameList,
    Store,
    StorePicture,
    StoreNames,
    Menu,
    MenuInfo,
    MenuDescription,
    MenuMenu,
    MenuNames
 } from '../../styles/search/style'
import SearchButton from '@components/searchButton'
import SearchInput from '@components/searchInput'

import useGetSearchList from '@hooks/useGetSearchList'

import { SearchKeyword } from "@utils/recoil/atom";

const Search = () => {

    const [keyword, setKeyword] = useState('')
    const [data, setData] = useState();
    
    const [realKeyword, setRealKeyword] = useState("00000");
    const getSearchList = useGetSearchList(realKeyword);
    

    const onChangeSearchInput = (e) => {
        setKeyword(e.target.value)
    }
    
    const onClickSearchButton = () => {
        setRealKeyword(keyword);
    }

    useEffect(() => {
        const storeResult = getSearchList && getSearchList.filter(item => item.findByStore === true);
        setStoreArray(storeResult);
        const menuResult = getSearchList && getSearchList.filter(item => item.findByStore === false);
        setMenuArray(menuResult);
    }, [getSearchList])

    // const debouncedSetKeyword = useDebounce(() => console.log(keyword), 500)


    const [storeArray, setStoreArray] = useState()
    const [menuArray, setMenuArray] = useState()

    const clear = () => {
        setKeyword('')
        setRealKeyword('00000')
    }   

    return (
        <>
            <Title>검색</Title>
            <hr/>
            <SearchDiv>
                <FirstSearchDiv>
                    <Image 
                        width={30}
                        height={30}
                        src='/images/searchBlack.svg'
                        alt='search'/>
                    <SearchInput
                        value={keyword}
                        onChange = {onChangeSearchInput}/>
                    <Image 
                        onClick={clear}
                        className='cancel'
                        width={24}
                        height={24}
                        src='/images/cancelBlack.svg'
                        alt='cancel'/>
                </FirstSearchDiv>
                <SecondSearchDiv>
                    <SearchButton 
                        backGroundColor={'black'}
                        color={'white'}
                        onClick = {onClickSearchButton}/>
                </SecondSearchDiv>
            </SearchDiv>
            <StoreName>
                <SearchTag>상호명</SearchTag>
                <StoreNameList>
                    {storeArray && storeArray.map((item, index) => {
                        return (
                        <Store key = {index}>
                            <StorePicture>
                                <Image 
                                    className='storeImage'
                                    width={60}
                                    height={60}
                                    src={item.thumbnail}
                                    alt='storeImage'/>
                            </StorePicture>
                            <StoreNames>
                                {item.name}
                            </StoreNames>
                        </Store>
                        )
                    })}
                </StoreNameList>
            </StoreName>
            <MenuName>
                <SearchTag>메뉴명</SearchTag>
                <MenuNameList>
                    {menuArray && menuArray.map((item, index) => {
                        return (
                            <Menu key = {index}>
                                <Image 
                                    className='menuImage'
                                    width={78}
                                    height={78}
                                    src={item.thumbnail}
                                    alt='storeImage'/>
                                <MenuInfo>
                                    <MenuNames>
                                    {item.name}
                                    </MenuNames>
                                    {/* <MenuDescription>
                                    {item.des}
                                    </MenuDescription> */}
                                    <MenuMenu>
                                        {item.itemNames.map((item, index) => {
                                            return (
                                                <p key = {index}>
                                                {item}
                                                </p>
                                            )
                                        })}
                                    </MenuMenu>
                                </MenuInfo>
                            </Menu>  
                        )
                    })}
                </MenuNameList>
            </MenuName>
           
        </>
    )
}

export default Search