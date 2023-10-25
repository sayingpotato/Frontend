import styled from 'styled-components'

const Div = styled.div`
  background-color: white;
  padding: 2%;
  height: ${(props) => (props.state === true ? '35vh' : '20vh')};
`

const ContentDiv = styled.div`
  display: flex;
  height: 15vh;
  margin: 0 auto;
  align-items : center;
`

const StoreDiv = styled.div`
  display: block;
  margin-left: 3%;
  width: 60vw;
`

const PName = styled.p`
  font-weight: 800;
  font-size: 13px;
`

const MenuDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PMenu = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin-right: 3%;
  margin-top: 0;
  margin-bottom: 2%;
`

const MoreButton = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 8px;
  font-size: 8px;
  font-weight: 400;
  width: 20vw;
  height: 4vh;
`

const StyledImage = styled.img`
  width: 70px;
  height: 70px;
`

const ReviewDiv = styled.div`
  margin: auto;
  margin-top : 5px;
`

const ReviewButton = styled.button`
  margin: auto;
  display: block;
  border : 0px solid white;
  background-color : white;
  font-size : 8px;
  font-weight : 800;
  color : #B0B0B0;
  margin-bottom : 3px;
`

const ReviewContent = styled.div`
  display: ${(props) => (props.state === true ? 'inline-block' : 'none')};
`

export {
  Div,
  ContentDiv,
  StoreDiv,
  PName,
  MenuDiv,
  PMenu,
  MoreButton,
  StyledImage,
  ReviewDiv,
  ReviewButton,
  ReviewContent,
}
