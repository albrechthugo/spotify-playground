import { useCookies } from 'react-cookie'

import { UnfollowPlaylistButton } from '~/components'
import { config } from '~/core/config'
import { Playlist } from '~/core/entities'

import * as S from './styles'

interface PlaylistItemProps {
  playlist: Playlist
  applyBackgroundColor: boolean
}

export const PlaylistItem = ({
  playlist: { name, owner, id },
  applyBackgroundColor
}: PlaylistItemProps) => {
  const [{ token }] = useCookies(['token'])
  const { display_name: ownerName } = owner

  const handleUnfollow = async () => {
    const UNFOLLOW_PLAYLIST_ENDPOINT = `${config.spotify_base_url}/playlists/${id}/followers`
    const options: RequestInit = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    await fetch(UNFOLLOW_PLAYLIST_ENDPOINT, options)
  }

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
