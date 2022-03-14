import styled from 'styled-components'

export const Wrapper = styled.aside`
  grid-area: sidemenu;
  width: 100%;
  border-right: 1px solid var(--color-border);
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
