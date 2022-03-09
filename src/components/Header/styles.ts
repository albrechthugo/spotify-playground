import styled from 'styled-components'

export const Header = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  height: 8rem;
  padding: 2rem;
  border-bottom: 0.1rem solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-primary);
`

export const Username = styled.span`
  font-size: 2rem;
  font-weight: var(--weight-light);
`
