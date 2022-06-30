import { useCallback } from 'react'
import { useCookies } from 'react-cookie'

import { UnfollowPlaylistButton } from '~/components'
import { usePlaylists } from '~/hooks'
import { unfollowPlaylist } from '~/lib'
import { Playlist } from '~/types'

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
  const updatePlaylists = usePlaylists(({ fetch }) => fetch)

  const handleUnfollow = useCallback(async () => {
    await unfollowPlaylist(id, token)

    await updatePlaylists(token)
  }, [id, token, updatePlaylists])

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
