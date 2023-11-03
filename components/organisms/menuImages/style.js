import styled from 'styled-components';

const MenuImagesDiv = styled.div`
    margin-left : 10px;
    margin-right : 10px;
`

const MenuWholeImagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
`

const MenuImagesContentDiv = styled.div`
  float: left;
  width: calc((100% - (2 * 15px)) / 3);
  box-sizing: border-box;
  border: ${({ isSelected }) => (isSelected ? "2px solid black" : "2px solid transparent")};
`

const ImagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  text-align : center;
`

const PeopleButtons = styled.div`
  display: flex;
  justify-content: center;
`

const ConfirmOrderDiv = styled.div`
  margin-top : 10px;
  margin-bottom : 10px;
  display: flex;
  justify-content: center;
  gap : 30px;
`

const ConfirmOrderContentDiv = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  border : 1px solid black;
  border-radius : 3px;
  text-align : center;
`

export { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv, PeopleButtons, ConfirmOrderDiv, ConfirmOrderContentDiv };