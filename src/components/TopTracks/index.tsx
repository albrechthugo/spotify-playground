import { TopTrack } from '~/types'

import * as S from './styles'

interface TopTracksProps {
  tracks: TopTrack[]
}

export const TopTracks = ({ tracks }: TopTracksProps) => {
  return (
    <S.TrackList>
      {tracks.map(({ name, id, artists }) => {
        const trackArtists = artists.map(({ name }) => name).join(', ')

        return (
          <S.Track key={id}>
            <S.Name artists={trackArtists}>{name}</S.Name>
          </S.Track>
        )
      })}
    </S.TrackList>
  )
}
