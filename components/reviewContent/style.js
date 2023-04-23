import styled from 'styled-components'

const Wholediv = styled.div`
  display: flex;
  gap : 1%;
`

const ReviewWholeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  gap : 5px;
`

const ReviewButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;
  gap : 10px;
`


const ReviewResetButton = styled.button`
  background-color : white;
  border : 1.5px solid #D9D9D9;
  border-radius : 8px;
  font-size : 8px;
  font-weight : 500;
  width : 20vw;
  height : 5vh;
`

const ReviewConfirmButton = styled.button`
  background-color : #28469C;
  border : 1.5px solid #28469C;
  border-radius : 8px;
  font-size : 8px;
  font-weight : 500;
  width : 20vw;
  height : 5vh;
  color : white;
`

const ReviewButtonName = styled.button`
  background-color : ${(props) => (props.state === true ? '#28469C' : 'white')};
  border : 1.5px solid #D9D9D9;
  border-radius : 5px;
  font-size : 7px;
  font-weight : 400;
  padding-left : 8px;
  padding-right : 8px;
  padding-top : 3px;
  padding-bottom : 3px;
  color : ${(props) => (props.state === true ? 'white' : 'black')};
`

export { Wholediv, ReviewWholeDiv, ReviewButtonDiv, ReviewResetButton, ReviewConfirmButton, ReviewButtonName }
