import { useEffect, useState } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";

import { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv, PeopleButtons, ConfirmOrderDiv, ConfirmOrderContentDiv } from './style';

import date from '@utils/date'

import { OrderData } from "@utils/recoil/atom";

import Image from "@atoms/image"
import Text from "@atoms/text"
import Button from '@atoms/button'
import Input from "@atoms/input"
import MenuInfo from '@organisms/menuInfo'

import useSubmitOrder from '@hooks/useSubmitOrder'

const MenuImages = ({menuData, discountData}) => {

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

    // 오늘의 날짜 기준 할인 array 추출
    const daysOfWeek = [["일요일", "SUN"], ["월요일", "MON"], ["화요일", "TUE"], ["수요일", "WED"], ["목요일", "THU"], ["금요일", "FRI"], ["토요일", "SAT"]];
    const dateIndex = date();
    const todayName = daysOfWeek[dateIndex][1]
    const todayDiscountInfo = discountData.filter(item => item.discountDay === todayName);
    
    const [totalPrice, setTotalPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");

    const ConfirmOrderData = () => {
        return (
            <>
                {totalPrice && discountPrice && <ConfirmOrderDiv>
                    <ConfirmOrderContentDiv>
                        <Text text="총 주문 금액" className="confirmOrderTitle" />
                        <Text text={totalPrice.toLocaleString() + "원"} />
                    </ConfirmOrderContentDiv>
                    <ConfirmOrderContentDiv>
                        <Text text="총 할인 금액" className="confirmOrderTitle" />
                        <Text text={discountPrice.toLocaleString() + "원"} />
                    </ConfirmOrderContentDiv>
                </ConfirmOrderDiv>
                }
                
                
                {totalPrice && <Button className="orderButton" onClick={submitOrderMenu}>주문 하기</Button>}
            </>
        )
    }

    const checkOrderMenu = () => {
        let sum = 0;
        
        const selectedObjects = selectedMenuIds.map(targetId => {
        const foundObject = menuData.find(item => item.id === targetId);
            return foundObject || null;
        });

        if (selectedObjects.length === 0) {
            alert("하나 이상 주문하세요.");
        } else {
            selectedObjects.forEach(obj => {
                if (obj) {
                    sum += obj.price
                } else {
            }
        });}

        if (people <= 0) {
            alert("주문 인원은 최소 한 명입니다.");
        }
        else {
            const findClosestRow = (arr, target) => {
                return arr.reduce((closest, current) => {
                    const closestDiff = Math.abs(closest.people - target);
                    const currentDiff = Math.abs(current.people - target);
                    return currentDiff < closestDiff ? current : closest;
                });
            };

            const closestRow = findClosestRow(todayDiscountInfo, people);
            const discountValue = closestRow.discountRatio;
            const discountRatioPrice = sum * discountValue / 100;

            setTotalPrice(sum)
            setDiscountPrice(discountRatioPrice)
            
        }
    }

    const submitOrderMenu = () => {
        setSubmitOrderData({
            "storeId": parseInt(idParam),
            "totalPrice": totalPrice,
            "totalPeople": people,
            "discountPrice": discountPrice,
            "itemIds": selectedMenuIds,
            "itemOptionIds": [
                0
            ]
        })
    }

    useEffect(() => {
        if (submitOrderData) {
            submitOrderForm();
            router.push("/map");
            setSubmitOrderData("");
        } 
    }, [submitOrderData])

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
                
                <Button className="checkOrderButton" onClick={checkOrderMenu}>주문 확인</Button>
                <ConfirmOrderData />
                
            </MenuImagesDiv>
        </>
    );
};

export default MenuImages;