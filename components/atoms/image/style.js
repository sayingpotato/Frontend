import styled from 'styled-components';

const StyledImage = styled.img`
  &.imageLayoutImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.imageLayoutMiddleImage {
    width: 100%;
    height: 50%;
    object-fit: contain;
  }
  &.todayDiscountLogoImage {
    width: 60px;
    height: 60px;
    display: block;
    margin: auto;
  }
`

export { StyledImage };