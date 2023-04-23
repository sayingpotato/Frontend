import styled from 'styled-components'

const Div = styled.div`
  border-radius: 10px;
  border: 1px solid white;
  padding: 3%;
  background-color: white;
  float: left;

  width: calc((100% - (2 * 15px)) / 3);
  height: 90px;
  box-sizing: border-box;
`

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: auto;
`

const StyledName = styled.p`
  margin: auto;
  font-weight: 600;
  font-size: 10px;
  text-align: center;
`

export { Div, StyledImage, StyledName }
