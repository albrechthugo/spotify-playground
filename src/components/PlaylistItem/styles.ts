import styled from 'styled-components'

export const Playlist = styled.li<{ applyBackgroundColor: boolean }>`
  height: 8rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  ${({ applyBackgroundColor }) =>
    applyBackgroundColor &&
    `
    background-color: var(--color-shadow-overlay);
  `}
`

export const Info = styled.section`
  display: flex;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 1.8rem;
`

export const Owner = styled.span`
  line-height: 2.4rem;
  font-size: 1.4rem;
`
