import { memo, useCallback } from 'react'
import { useCookies } from 'react-cookie'

import { UnfollowPlaylistButton } from '~/components'
import { config } from '~/core/config'
import { Playlist } from '~/core/entities'

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
      const UNFOLLOW_PLAYLIST_ENDPOINT = `${config.spotify_base_url}/playlists/${id}/followers`
      const options: RequestInit = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      await fetch(UNFOLLOW_PLAYLIST_ENDPOINT, options)

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
