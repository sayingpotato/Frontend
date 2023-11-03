import styled from 'styled-components'

const NavbarComponent = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  height: 80px;

  a {
    text-decoration: none;
  }
`

const NavbarOne = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 9px;

  p {
    font-size: 11px;
    font-family: 'Pretendard Variable';
    color: #575656;
    font-weight: 600;
  }
`

const MainComponent = styled.div`
  height: 84vh;
  overflow: auto;
`
export { NavbarComponent, NavbarOne, MainComponent }
