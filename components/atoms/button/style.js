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
    background-color: ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'cafe' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
    border-radius: 3px;
  }

  &.typeFoodButton {
    width: 50px;
    font-size: 10px;
    height: 20px;
    background-color: ${(props) => (props.state === 'food' ? 'black' : 'white')};
    color: ${(props) => (props.state === 'food' ? 'white' : 'black')};
    border: 0px solid ${(props) => (props.state === 'cafe' ? 'black' : 'white')};
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

`

export { StyledButton };