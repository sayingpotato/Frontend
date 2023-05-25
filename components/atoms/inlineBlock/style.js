import styled from 'styled-components';

const StyledInlineBlock = styled.div`

  &.outside {
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    background-color: #eaf2ff;
    border-radius: 4px;
    height: 25px;
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
`

export { StyledInlineBlock };