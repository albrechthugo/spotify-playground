import styled from 'styled-components'

export const TrackList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Track = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 6rem;
  padding: 0 0.8rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-shadow-overlay);
  }
`

export const Name = styled.span<{ artists: string }>`
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
  color: var(--color-primary);

  &:after {
    content: ' - ${(props) => props.artists}';
    color: var(--color-white);
    font-weight: var(--weight-regular);
  }
`
