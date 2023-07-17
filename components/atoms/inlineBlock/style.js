import styled from 'styled-components';

const StyledInlineBlock = styled.div`

  &.outside {
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    background-color: #eaf2ff;
    border-radius: 4px;
    height: 25px;
    width : 100%;
  }

  &.oneInside {
    background-color: #4f79f1;
    display: flex;
    align-items: center;
    padding: 0 0 0 5%;
    border-radius: 4px;
    width: 80%;
    height: 25px;
  }

  &.twoInside {
    background-color: #4f79f1;
    display: flex;
    align-items: center;
    padding: 0 0 0 5%;
    border-radius: 4px;
    width: 70%;
    height: 25px;
  }

  &.threeInside {
    background-color: #4f79f1;
    display: flex;
    align-items: center;
    padding: 0 0 0 5%;
    border-radius: 4px;
    width: 60%;
    height: 25px;
  }

  &.visitorReviewOutside {
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    background-color: #eaf2ff;
    border-radius: 4px;
    height: 25px;
    width : 100%;
  }

  &.oneVisitorReviewInside {
    background-color: #4f79f1;
    display: flex;
    align-items: center;
    padding: 0 5% 0 5%;
    border-radius: 4px;
    width: 60%;
    height: 25px;
    justify-content: space-between;
  }

  &.twoVisitorReviewInside {
    background-color: #6C92FF;
    display: flex;
    align-items: center;
    padding: 0 5% 0 5%;
    border-radius: 4px;
    width: 50%;
    height: 25px;
    justify-content: space-between;
  }

  &.threeVisitorReviewInside {
    background-color: #A3BAFF;
    display: flex;
    align-items: center;
    padding: 0 5% 0 5%;
    border-radius: 4px;
    width: 40%;
    height: 25px;
    justify-content: space-between;
  }

  &.fourVisitorReviewInside {
    background-color: #DAE3FF;
    display: flex;
    align-items: center;
    padding: 0 5% 0 5%;
    border-radius: 4px;
    width: 30%;
    height: 25px;
    justify-content: space-between;
  }
`

export { StyledInlineBlock };