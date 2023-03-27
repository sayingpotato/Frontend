import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const StyledMapDiv = styled.div`
  height: 100vh;
`

const StyledMap = styled(Map)`
  z-index: 1;
  height: 100%;
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: 3%;
  border: 1px solid white;
  z-index: 2;
  border-radius: 50%;
  background-color: white;
  right: 0;
  margin-right: 3%;
`

export { StyledMapDiv, StyledMap, StyledMapButton }
