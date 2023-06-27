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
`

const ImagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  text-align : center;
`

export { MenuImagesDiv, MenuWholeImagesDiv, MenuImagesContentDiv, ImagesDiv };