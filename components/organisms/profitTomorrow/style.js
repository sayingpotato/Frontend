import styled from 'styled-components'

const WholeDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin : 5px;
    gap : 3px;
`

const SemiDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Div = styled.div`
  border-radius : 3px;
  display: flex;
  flex-direction: column;
  border : 1px solid black;
  width : 100px;
`

export {
    WholeDiv,
    SemiDiv,
    Div,
}