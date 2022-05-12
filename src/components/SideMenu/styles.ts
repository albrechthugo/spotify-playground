import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.aside`
  grid-area: sidemenu;
  position: fixed;
  top: 8rem;
  width: 28rem;
  height: 100%;
  border-right: 1px solid var(--color-border);
  background-color: var(--color-dark-bg);
  z-index: 1;

  ${media.lessThan('large')`
      width: 10rem;
  `}

  ${media.lessThan('medium')`
    border-top: 1px solid var(--color-border);
    border-right: none;
    height: 6rem;
    width: 100%;
    bottom: 0;
    top: unset;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const Link = styled.li`
  font-size: 1.6rem;
  line-height: 3rem;
  font-weight: var(--weight-light);
  cursor: pointer;
  transition: 0.4s ease-out;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  &:hover {
    background-color: var(--color-primary-hover);
    color: var(--color-dark-bg);
  }
`
