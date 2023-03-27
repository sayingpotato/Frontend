import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const StyledMapDiv = styled.div`
  height: 100vh;
  width: 100vw;
`

const StyledMap = styled(Map)`
  z-index: 1;
  height: 100%;
  width: inherit;
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '33%' : '3%')};
  border: 1px solid white;
  z-index: 2;
  border-radius: 50%;
  background-color: white;
  right: 3%;
`

const Div = styled.div`
  position: absolute;
  bottom: 0%;
  background-color: white;
  z-index: 2;
  width: inherit;
  height: 30%;
  display: ${(props) => (props.state === true ? 'inline-block' : 'none')};
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px -10px 10px grey;
  border: 1px solid black;
`

export { StyledMapDiv, StyledMap, StyledMapButton, Div }
