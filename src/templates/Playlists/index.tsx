import { PlaylistItem } from '~/components'
import { Playlist } from '~/core/entities/playlist'

import * as S from './styles'

export interface PlaylistsProps {
  playlists: Playlist[]
}

const PlaylistsTemplate = ({ playlists }: PlaylistsProps) => {
  return (
    <S.Wrapper>
      {playlists.map((playlist, i) => (
        <PlaylistItem
          key={playlist.id}
          playlist={playlist}
          applyBackgroundColor={i % 2 === 0}
        />
      ))}
    </S.Wrapper>
  )
}

export default PlaylistsTemplate
