import styled from 'styled-components'

export const Button = styled.button`
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  width: max-content;
  max-width: 30rem;
  height: max-content;
  min-height: max-content;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-dark-bg);
  border-style: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`
