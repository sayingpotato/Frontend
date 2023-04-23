import styled from 'styled-components'

const InfoDiv = styled.div`
  background-color: #28469c;
  height: 15%;
  padding-top: 2%;
`

const TypeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
`

const TypeCafeButton = styled.button`
  width: 50px;
  font-size: 10px;
  height: 20px;
  background-color: ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
  color: ${(props) => (props.state === 'cafe' ? 'white' : 'black')};
  border: 0px solid ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
  border-radius: 3px;
`

const TypeFoodButton = styled.button`
  width: 50px;
  font-size: 10px;
  height: 20px;
  background-color: ${(props) => (props.state === 'food' ? 'black' : 'white')};
  color: ${(props) => (props.state === 'food' ? 'white' : 'black')};
  border: 0px solid ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
  border-radius: 3px;
`

const DayInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NotNowDay = styled.p`
  color: white;
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
`

const NowDay = styled.p`
  color: white;
  font-weight: 800;
  font-size: 32px;
  margin-top: 10px;
`

const BackDiv = styled.div`
  background-color: #efefef;
  padding: 3%;
  height: 100%;
`

const WholeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
`

export {
  InfoDiv,
  TypeButtonDiv,
  TypeFoodButton,
  TypeCafeButton,
  DayInfoDiv,
  NotNowDay,
  NowDay,
  BackDiv,
  WholeDiv,
}
