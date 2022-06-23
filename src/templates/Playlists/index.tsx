import React, { memo } from 'react'

import { PlaylistItem } from '~/components'
import { Playlist } from '~/core/entities/playlist'

import * as S from './styles'

export interface PlaylistsProps {
  playlists: Playlist[]
  updatePlaylistsHandler: () => Promise<void>
}

const PlaylistsTemplate = memo(
  ({ playlists, updatePlaylistsHandler }: PlaylistsProps) => {
    return (
      <S.Wrapper>
        {playlists.map((playlist, i) => (
          <PlaylistItem
            key={playlist.id}
            playlist={playlist}
            applyBackgroundColor={i % 2 === 0}
            updatePlaylistsHandler={updatePlaylistsHandler}
          />
        ))}
      </S.Wrapper>
    )
  }
)

export default PlaylistsTemplate
