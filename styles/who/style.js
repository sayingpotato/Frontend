import styled from 'styled-components'

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius : 8px;
  border: 1px solid black;
  width : 200px;
  height : 200px;
  margin : 0 auto;
`

const ContentWholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap : 50px;
`

export { ContentWholeDiv, ContentDiv }
