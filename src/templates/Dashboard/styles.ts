import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ArtistWrapper = styled.div<{ isLastArtist: boolean }>`
  display: flex;
  height: 14rem;
  width: 100%;
  padding: 0 2rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    h1 {
      color: var(--color-primary);
    }
  }

  ${({ isLastArtist }) =>
    !isLastArtist && 'border-bottom: 1px solid var(--color-border)'}
`

export const ArtistName = styled.h1`
  font-size: 2.6rem;
`

export const ArtistFollowers = styled.span`
  font-size: 1.4rem;
`
