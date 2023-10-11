import styled from 'styled-components'
import { Map } from 'react-kakao-maps-sdk'

const StyledMapDiv = styled.div`
  height: 100%;
  width: 100vw;
`

const StyledMap = styled(Map)`
  z-index: 1;
  height: 100%;
  width: inherit;
`

export {
  StyledMapDiv,
  StyledMap,
}
