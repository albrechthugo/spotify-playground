import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArtistWrapper = styled.div`
  width: 100%;
  height: 26rem;
  padding: 2rem 4rem;

  ${media.greaterThan('medium')`
    border-bottom: 1px solid var(--color-border);
  `}
`

export const MainInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ImageWrapper = styled.div`
  overflow: hidden;

  ${media.lessThan('small')`
    display: none;
  `}
`

export const Name = styled.h1`
  ${media.lessThan('small')`
    font-size: 4rem;
  `}

  ${media.greaterThan('small')`
    font-size: 6rem;
    margin-left: 4rem;
  `}

  ${media.greaterThan('medium')`
    font-size: 8rem;
  `}
`

export const Followers = styled.span``

export const GenresWrapper = styled.div``
