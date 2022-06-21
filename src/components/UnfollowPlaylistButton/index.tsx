import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import * as S from './styles'

interface UnfollowPlaylistButtonProps {
  handleUnfollow: () => void
}

export const UnfollowPlaylistButton = ({
  handleUnfollow
}: UnfollowPlaylistButtonProps) => {
  return (
    <S.Container onClick={handleUnfollow}>
      <IconButton aria-label="Deixar de seguir playlist">
        <Close color="primary" fontSize="large" />
      </IconButton>
    </S.Container>
  )
}
