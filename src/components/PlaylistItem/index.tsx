import { UnfollowPlaylistButton } from '~/components'
import { Playlist } from '~/core/entities'

import * as S from './styles'

interface PlaylistItemProps {
  playlist: Playlist
  applyBackgroundColor: boolean
}

export const PlaylistItem = ({
  playlist: { name, owner },
  applyBackgroundColor
}: PlaylistItemProps) => {
  const { display_name: ownerName } = owner

  return (
    <S.Playlist applyBackgroundColor={applyBackgroundColor}>
      <S.Info>
        <UnfollowPlaylistButton />

        <S.Description>
          <S.Name>{name}</S.Name>
          <S.Owner>Por: {ownerName}</S.Owner>
        </S.Description>
      </S.Info>
    </S.Playlist>
  )
}
