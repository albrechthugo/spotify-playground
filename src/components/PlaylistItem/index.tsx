import { memo, useCallback } from 'react'
import { useCookies } from 'react-cookie'

import { UnfollowPlaylistButton } from '~/components'
import { Playlist } from '~/core/entities'
import { unfollowPlaylist } from '~/lib'

import * as S from './styles'

interface PlaylistItemProps {
  playlist: Playlist
  applyBackgroundColor: boolean
  updatePlaylistsHandler: () => Promise<void>
}

export const PlaylistItem = memo(
  ({
    playlist: { name, owner, id },
    applyBackgroundColor,
    updatePlaylistsHandler
  }: PlaylistItemProps) => {
    const [{ token }] = useCookies(['token'])
    const { display_name: ownerName } = owner

    const handleUnfollow = useCallback(async () => {
      await unfollowPlaylist(id, token)

      await updatePlaylistsHandler()
    }, [id, token, updatePlaylistsHandler])

    return (
      <S.Playlist applyBackgroundColor={applyBackgroundColor}>
        <S.Info>
          <UnfollowPlaylistButton
            handleUnfollow={handleUnfollow}
            playlistName={name}
          />

          <S.Description>
            <S.Name>{name}</S.Name>
            <S.Owner>Por: {ownerName}</S.Owner>
          </S.Description>
        </S.Info>
      </S.Playlist>
    )
  }
)
