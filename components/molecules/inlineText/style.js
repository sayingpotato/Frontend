import styled from 'styled-components';

const StyledInlineTextDiv = styled.div`
  &.basic {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0;
  }

  &.discountContentValue{
    display : block;
  }

  &.infoForm {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`

export { StyledInlineTextDiv };