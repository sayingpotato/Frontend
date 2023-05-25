import styled from "styled-components";

const UserInfo = styled.div`
    background-color : #28469C;
    height : 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const UserName = styled.p`
    font-size : 30px;
    font-weight : 800;
    color : white;
`

const DiscountDiv = styled.div`
    display:block;
`

const MoneyTitle = styled.p`
    font-size : 12px;
    color : white;
    font-weight : 800;
    margin-left : 30px;
    margin-bottom : 0px;
`

const MoneyDiv = styled.div`
    display : flex;
    align-items: center;
    margin-top : 0px;
`

const Money = styled.p`
    font-size : 12px;
    color : white;
    font-weight : 800;
`

const BackDiv = styled.div`
    background-color : #EFEFEF;
    padding : 20px 30px 20px 30px;
    height : 80vh;
    gap : 10px;
    display: flex;
    flex-direction: column;
`

const DiscountInfo = styled.div`
    border : 1px solid #999999;
    border-radius : 10px;
    background-color : white;
`

const DiscountContentWhole = styled.div`
    display : flex;
    flex-wrap: wrap;
    padding-left : 20px;
    padding-right : 20px;
`

const DiscountContent = styled.div`
    width : 50%;
    display : flex;
    align-items: center;
`

const DiscountContentValue = styled.div`
    display : block;
`

const DiscountContentName = styled.p`
    font-size:10px;
    font-weight : 500;
    margin-bottom : 1px;
`

const DiscountContentMoney = styled.p`
    font-size:10px;
    font-weight : 500;
    margin-top : 1px;
`

const DiscountTitle = styled.p`
    font-size : 15px;
    font-weight : 800;
    text-align : center;
    text-decoration: underline;
    text-decoration-color : #999999;
    text-underline-offset : 5px;
    margin-top : 5px;
`

const ButtonWholeDiv = styled.div`
    height : 8vh;
    border : 1px solid #999999;
    border-radius : 5px;
    background-color : white;

    a   {
        text-decoration: none;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 10px;
`

const ButtonTitle = styled.p`
    font-size : 15px;
    font-weight : 800;
    color : black;
`

const ButtonLogoutTitle = styled.p`
    font-size : 15px;
    font-weight : 800;
    color : red;
`

export {UserInfo, UserName, DiscountDiv, MoneyTitle, MoneyDiv, Money, BackDiv, DiscountInfo, DiscountContent, DiscountContentValue, DiscountContentWhole, DiscountTitle, DiscountContentName, DiscountContentMoney, ButtonWholeDiv, ButtonDiv, ButtonTitle, ButtonLogoutTitle}