import styled from 'styled-components';

const StyledTitle = styled.h1`
    text-align : center;
    font-size : 20px;

    &.subTitle {
        color: white;
        font-weight: 400;
        font-size: 20px;
        margin-top: 10px;
    }

    &.mainTitle {
        color: white;
        font-weight: 800;
        font-size: 32px;
        margin-top: 10px;
    }

    &.mypageName {
        color: white;
        font-weight: 800;
        font-size: 32px;
    }

    &.mypageDiscountTitle {
        font-size : 15px;
        font-weight : 800;
        text-align : center;
        text-decoration: underline;
        text-decoration-color : #999999;
        text-underline-offset : 5px;
        margin-top : 5px;
    }

`

export { StyledTitle };