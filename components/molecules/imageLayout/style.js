import styled from 'styled-components';

const StyledImageLayoutWholeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`

const StyledImageLayoutOneDiv = styled.div`
  width: 50%;
  height: 100px;
  background-color : yellow;
`

const StyledImageLayoutTwoDiv = styled.div`
  width: 25%;
  height: 100px;
  background-color : green;
`

const StyledImageLayoutThreeDiv = styled.div`
  width: 25%;
  height: 100px;
  background-color : blue;
`

export { StyledImageLayoutWholeDiv, StyledImageLayoutOneDiv, StyledImageLayoutTwoDiv, StyledImageLayoutThreeDiv };