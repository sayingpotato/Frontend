import styled from 'styled-components'

const MarkerInfoDiv = styled.div`
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

const MainDiv = styled.div`
  height: 5%;
  padding: 0;
`

const PName = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  font-family: 'Pretendard Variable';
`

const PStatus = styled.p`
  font-size: 15px;
  color: ${(props) => props.status};
  font-weight: 600;
  font-family: 'Pretendard Variable';
`

const InfoValue = styled.p`
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Pretendard Variable';
`

const icon = styled.nav`
  display: 'inline-block';
`

export { MarkerInfoDiv, MainDiv, PName, PStatus, InfoValue, icon }
