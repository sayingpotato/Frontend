import styled from 'styled-components'

const MarkerInfoDiv = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div {
    display: flex;
    gap: inherit;
    align-items: center;
  }
`

const PName = styled.p`
  font-size: 20px;
  display: inline-block;
  font-weight: 500;
`

const PStatus = styled.p`
  display: inline-block;
  font-size: 15px;
  color: ${(props) => props.status};
  font-weight: 500;
`

const PAddress = styled.p`
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
`

const PTime = styled.p`
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
`

const PCall = styled.p`
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
`

export { MarkerInfoDiv, PName, PStatus, PAddress, PTime, PCall }
