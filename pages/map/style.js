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

  .marker {
  }
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '50%' : '25%')};
  border: 1px solid white;
  z-index: 2;
  border-radius: 50%;
  background-color: white;
  right: 3%;
  width: 50px;
  height: 50px;
  padding: 0px;
  align: center;

  .refreshIcon {
    margin: 0 auto;
  }
`

const StyledListButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '43%' : '18%')};
  border: 1px solid white;
  z-index: 2;
  border-radius: 20%;
  background-color: white;
  right: 3%;
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .storeListIcon {
  }
`

const storeListIcon = styled.image`
  width: 30px;
  height: 30px;
`

const ListName = styled.p`
  font-size: 12px;
  display: inline;
  margin-left: 7%;
  top: 50%;
  left: 50%;
  font-weight: 400;
  font-family: 'Pretendard Variable';
`

const listIcon = styled.nav`
  top: 50%;
  left: 50%;
`

const Div = styled.div`
  position: absolute;
  bottom: 16%;
  background-color: white;
  z-index: 2;
  width: inherit;
  height: 25%;
  display: ${(props) => (props.state === true ? 'inline-block' : 'none')};
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px -3px 5px grey;
`

export {
  StyledMapDiv,
  StyledMap,
  StyledMapButton,
  storeListIcon,
  StyledListButton,
  ListName,
  Div,
  listIcon,
}
