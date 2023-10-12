import styled from 'styled-components'

const Div = styled.div`
  padding: 2%;
`

const TimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap : 30px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap : 50px;
  height : 30px;
`
const ContentDiv = styled.div`
  display: flex;
  gap : 50px;
  margin: 0 auto;
  align-items : center;
`

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left : 70px;
`

const SummaryDiv = styled.div`
  margin : 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap : 50px;
`

const SummaryPriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap : 20px;
`

const SummaryPeopleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap : 20px;
`

export {
  Div,
  TimeDiv,
  Header,
  ContentDiv,
  MenuDiv,
  PriceDiv,
  ButtonDiv,
  SummaryDiv,
  SummaryPriceDiv,
  SummaryPeopleDiv,
}
