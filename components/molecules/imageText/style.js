import styled from 'styled-components';

const StyledImageTextDiv = styled.div`
    &.basic {
        display: flex;
        align-items: center;
        gap : 3px;
    }

    &.storeListMenuRanking {
        display: flex;
        align-items: center;
        gap : 3px;
        height : 30px;
    }

    &.storeInformationPostion {
        margin-left : 10px;
        display: flex;
        align-items: center;
        gap : 3px;
    }

    &.mypageButtonsDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        gap : 10px;
    }

    &.markerContentImageTextDiv {
        display: flex;
        gap : 10px;
    }
`

export { StyledImageTextDiv };