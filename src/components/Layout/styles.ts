import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template-columns: 28rem auto;
  grid-template-rows: 8rem auto;
  grid-template-areas:
    'header header'
    'sidemenu main';

  @media screen and (max-width: 1266px) {
    grid-template-columns: 10rem auto;
  }
`

export const ChildrenWrapper = styled.section`
  grid-area: main;
`
