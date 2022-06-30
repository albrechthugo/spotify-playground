import { useCallback, useRef } from 'react'

import { ConfirmUnfollowPlaylist, UnfollowPlaylistButton } from '~/components'
import { Playlist } from '~/types'

import * as S from './styles'

interface PlaylistItemProps {
  playlist: Playlist
  applyBackgroundColor: boolean
}

export const PlaylistItem = ({
  playlist,
  applyBackgroundColor
}: PlaylistItemProps) => {
  const { display_name: ownerName } = playlist.owner

  const confirmUnfollowPlaylistRef = useRef<{
    handleOpen: () => void
  }>(null)

  const handleOpen = useCallback(
    () => confirmUnfollowPlaylistRef.current?.handleOpen(),
    []
  )

  return (
    <>
      <S.Playlist applyBackgroundColor={applyBackgroundColor}>
        <S.Info>
          <UnfollowPlaylistButton handleClick={handleOpen} />

          <S.Description>
            <S.Name>{playlist.name}</S.Name>
            <S.Owner>Por: {ownerName}</S.Owner>
          </S.Description>
        </S.Info>
      </S.Playlist>

      <ConfirmUnfollowPlaylist
        ref={confirmUnfollowPlaylistRef}
        playlist={playlist}
      />
    </>
  )
}
