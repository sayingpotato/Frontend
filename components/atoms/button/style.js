import styled from 'styled-components';

const StyledButton = styled.button`

  &.mapImageButton {
    background-color : #28469C;
    position: absolute;
    bottom: ${(props) => (props.state === true ? '50%' : '25%')};
    border: 1px solid white;
    z-index: 2;
    border-radius: 50%;
    right: 3%;
    width: 50px;
    height: 50px;
    padding: 0px;
  }

  &.typeCafeButton {
    width: 50px;
    font-size: 10px;
    height: 20px;
    background-color: ${(props) => (props.state === 'CAFE' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'CAFE' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'CAFE' ? 'black' : 'white')};
    border-radius: 3px;
  }

  &.typeFoodButton {
    width: 50px;
    font-size: 10px;
    height: 20px;
    background-color: ${(props) => (props.state === 'FOOD' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'FOOD' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'FOOD' ? 'black' : 'white')};
    border-radius: 3px;
  }

  &.refreshButton {
    background-color : white;
    position: absolute;
    bottom: ${(props) => (props.state === true ? '50%' : '25%')};
    border: 1px solid white;
    z-index: 2;
    border-radius: 50%;
    right: 3%;
    width: 50px;
    height: 50px;
    padding: 0px;
  }

  &.mapListButton {
    position: absolute;
    bottom: ${(props) => (props.state === true ? '43%' : '18%')};
    border: 1px solid white;
    z-index: 2;
    border-radius: 20px;
    background-color: white;
    right: 3%;
    width: 110px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.mypageButtons {
    height : 8vh;
    border : 1px solid #999999;
    border-radius : 5px;
    background-color : white;
  }

  &.orderButton {
    border: 1px solid white;
    border-radius: 6px;
    background-color : #28469C;
    color : white;
    width: 180px;
    height : 40px;
    display: block;
    margin : 0 auto;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard Variable";
  }

  &.orderPeopleButton {
    border: 1px solid white;
    background-color : #999999;
    width: 50px;
    color : white;
    border-radius: 6px;
  }

  &.approvalOrderButton {
    background-color : #28469C;
    border : 1.5px solid #28469C;
    border-radius : 8px;
    font-size : 8px;
    font-weight : 500;
    width : 20vw;
    height : 5vh;
    color : white;
  }

  &.cancelOrderButton {
    background-color : white;
    border : 1.5px solid #D9D9D9;
    border-radius : 8px;
    font-size : 8px;
    font-weight : 500;
    width : 20vw;
    height : 5vh;
  }

  &.infoButton {
    font-size: 12px;
    font-weight: 400;
    background-color : white;
  }

  &.typeTodayPrediction {
    width: 50px;
    font-size: 10px;
    height: 20px;
    background-color: ${(props) => (props.state === 'todayPrediction' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'todayPrediction' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'todayPrediction' ? 'black' : 'white')};
    border-radius: 3px;
  }

  &.typeTommorowPrediction {
    width: 50px;
    font-size: 10px;
    height: 20px;
    background-color: ${(props) => (props.state === 'tommorowPrediction' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'tommorowPrediction' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'tommorowPrediction' ? 'black' : 'white')};
    border-radius: 3px;
  }

  &.checkOrderButton {
    border: 1px solid white;
    border-radius: 6px;
    background-color : green;
    color : white;
    width: 300px;
    height : 40px;
    display: block;
    margin : 0 auto;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard Variable";
  }
  
`

export { StyledButton };