import styled from 'styled-components';

const MarkerContentDiv = styled.div`
    position: absolute;
    bottom: 16%;
    background-color: white;
    z-index: 2;
    width: inherit;
    height: 25%;
    display: ${(props) => (props.state === true ? 'inline-block' : 'none')};
    border-radius: 15px 15px 0px 0px;
    box-shadow: 0px -3px 5px grey;
`

export { MarkerContentDiv };