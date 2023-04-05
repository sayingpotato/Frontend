import styled from 'styled-components'

const ReviewWholeDiv = styled.div`
  width: 70%;
  justify-content: space-between;
`
const ReviewDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  background-color: #eaf2ff;
  border-radius: 4px;
  height: 25px;
`

const ReviewName = styled.p`
  font-size: 8px;
  font-weight: 700;
  margin-left: 3%;
`

const OneColoredDiv = styled.div`
  background-color: #4f79f1;
  display: flex;
  align-items: center;
  padding: 0 0 0 5%;
  border-radius: 4px;
  width: 80%;
  height: 25px;
`

const TwoColoredDiv = styled.div`
  background-color: #6c92ff;
  display: flex;
  align-items: center;
  padding: 0 0 0 5%;
  border-radius: 4px;
  width: 70%;
  height: 25px;
`

const ThreeColoredDiv = styled.div`
  background-color: #a3baff;
  display: flex;
  align-items: center;
  padding: 0 0 0 5%;
  border-radius: 4px;
  width: 60%;
  height: 25px;
`

export {
  ReviewWholeDiv,
  ReviewDiv,
  ReviewName,
  OneColoredDiv,
  TwoColoredDiv,
  ThreeColoredDiv,
}
