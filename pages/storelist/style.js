import styled from 'styled-components'

const DataDiv = styled.div`
  border: 1px solid white;
  border-radius: 1px 1px 5px 5px;
  width: 90%;
  box-shadow: 5px 8px 5px -5px, -5px 8px 5px -5px;
  margin: 0 auto;
  height: 60%;
  margin-bottom: 5%;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  align: center;
  height: 50px;
  gap: 10px;
`

const StoreName = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-left: 5%;
`

const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  align: center;
  height: 50px;
  gap: 5px;
  padding: 0;
  width: 5%;
`

const StoreMin = styled.p`
  font-size: 8px;
  font-weight: 900;
  color: white;
  border: 1px solid #4aa406;
  border-radius: 1px;
  background-color: #4aa406;
  height: 10px;
  padding: 3px 5px 3px 5px;
`

const StoreMax = styled.p`
  font-size: 8px;
  font-weight: 900;
  color: white;
  border: 1px solid #ff2e2e;
  border-radius: 1px;
  background-color: #ff2e2e;
  height: 10px;
  padding: 3px 5px 3px 5px;
`

const ContentDiv = styled.div`
  display: flex;
  height: 10%;
`

const StyledMapButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.state === true ? '38%' : '18%')};
  z-index: 2;
  border-radius: 50%;
  border: 1px solid #28469c;
  background-color: #28469c;
  right: 3%;
  width: 60px;
  height: 60px;
`

export {
  DataDiv,
  TitleDiv,
  StoreName,
  DiscountDiv,
  StoreMin,
  StoreMax,
  ContentDiv,
  StyledMapButton,
}
