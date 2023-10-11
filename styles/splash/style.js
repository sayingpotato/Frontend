import styled from 'styled-components'

const ContentDiv = styled.div`
    display : flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Title = styled.p`
    color : #1D318A;
    font-size : 15px;
    font-weight : 800;
    margin-top : 1px;
    margin-bottom : 1px;
`

const Name = styled.p`
    color : #1D318A;
    font-size : 44px;
    font-weight : 800;
`

export {
    ContentDiv,
    Title,
    Name
}
