import styled from 'styled-components'

const WholeDiv = styled.div`
    padding : 20px 10px 10px 10px;
    border-radius : 10px;
    margin-left : 30px;
    margin-right : 30px;
    box-shadow: 1px 1px 1px 1px grey inset;
    height : 250px;
    position: relative; 
`

const MeatBallDiv = styled.div`
    display: inline-block;
    float : right;
    width: 30px;
    height: 20px;
`;

const MeatBallLine = styled.div`
  width: 5px;
  height: 5px;
  background: #28469c;
  margin: 1px 0;
  border-radius: 5px;
`;

const DataDiv = styled.div`
    z-index : 1;
`

const InfoDiv = styled.div`
    z-index : 2;
    position: absolute;
    top: 18%;
    left: 74%;
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export { WholeDiv, MeatBallDiv, MeatBallLine, DataDiv, InfoDiv }