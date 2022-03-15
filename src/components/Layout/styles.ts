import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template-columns: 28rem auto;
  grid-template-rows: 8rem auto;
  grid-template-areas:
    'header header'
    'sidemenu main';

  ${media.lessThan('large')`
      grid-template-columns: 10rem auto;
  `}

  ${media.lessThan('medium')`
    grid-template-columns: auto;
    grid-template-rows: 8rem auto 6rem;
    grid-template-areas:
      'header'
      'main'
      'sidemenu';
  `}
`

export const ChildrenWrapper = styled.section`
  grid-area: main;
`
