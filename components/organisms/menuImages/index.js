import { useEffect, useState } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";

import { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv, PeopleButtons } from './style';

import { OrderData } from "@utils/recoil/atom";

import Image from "@atoms/image"
import Text from "@atoms/text"
import Button from '@atoms/button'
import Input from "@atoms/input"
import MenuInfo from '@organisms/menuInfo'

import useSubmitOrder from '@hooks/useSubmitOrder'

const MenuImages = ({menuData}) => {

    const [submitOrderData, setSubmitOrderData] = useRecoilState(OrderData);

    const currentURL = window.location.href;
    const urlSearchParams = new URLSearchParams(currentURL.split('?')[1]);
    const idParam = urlSearchParams.get('id');
    
    const [people, setPeople] = useState(0);

    const [selectedMenuIds, setSelectedMenuIds] = useState([]);

    const toggleMenu = (itemId) => {
        setSelectedMenuIds((prevSelectedMenuIds) => {
        if (prevSelectedMenuIds.includes(itemId)) {
            return prevSelectedMenuIds.filter((id) => id !== itemId);
        } else {
            return [...prevSelectedMenuIds, itemId];
        }
        });
    };

    const submitOrderForm = useSubmitOrder();

    const submitOrderMenu = () => {
        console.log("주문하기");
        let sum = 0;
        
        const selectedObjects = selectedMenuIds.map(targetId => {
        const foundObject = menuData.find(item => item.id === targetId);
            return foundObject || null;
        });

        if (selectedObjects.length === 0) {
            alert("하나 이상 주문하세요.")
        } else {
            selectedObjects.forEach(obj => {
                if (obj) {
                    sum += obj.price
                } else {
            }
        });}

        setSubmitOrderData({
            "storeId": parseInt(idParam),
            "totalPrice": sum,
            "totalPeople": people,
            "discountPrice": 0,
            "itemIds": selectedMenuIds,
            "itemOptionIds": [
                0
            ]
        })

        submitOrderForm();
        router.push("/order");
        
    }

    const handleInputChange = (e) => {
        setPeople(e.target.value);
    };

    return (
        <>
            <MenuImagesDiv>
                <Text text="메뉴판" className="storeDetailMiniTitle" />
                <MenuWholeImagesDiv>
                    {menuData.map((item, index) => (
                        <MenuImagesContentDiv
                            key={item.id}
                            onClick={() => toggleMenu(item.id)}
                            isSelected={selectedMenuIds.includes(item.id)}
                        >
                            <ImagesDiv>
                            <Image src={item.img} alt={item.img} className="menuImage"/>
                                <MenuInfo name={item.name} price={item.price} rank={item.rank} />
                            </ImagesDiv>
                            {((index + 1) % 3 === 0) && <br />}
                        </MenuImagesContentDiv>
                    ))}
                </MenuWholeImagesDiv>
                <br />
                <div>
                    <Text text="인원 선택" className="storeDetailMiniTitle" />
                    <PeopleButtons>
                        <Button text="+" className="orderPeopleButton" onClick={() => setPeople(people + 1)} />
                        <Input
                            className="orderPeopleInput"
                            type="number"
                            onChange={handleInputChange}
                            value={people}
                        />
                        <Button text="-" className="orderPeopleButton" onClick={() => setPeople(people - 1)} />
                    </PeopleButtons>
                </div>
                <br />
                <Button className="orderButton" onClick={submitOrderMenu}>주문하기</Button>
            </MenuImagesDiv>
        </>
    );
};

export default MenuImages;