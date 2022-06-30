import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import * as S from './styles'

export const UnfollowPlaylistButton = ({
  handleClick
}: {
  handleClick: () => void
}) => {
  return (
    <>
      <S.Container onClick={handleClick}>
        <IconButton aria-label="Deixar de seguir playlist">
          <Close color="primary" fontSize="large" />
        </IconButton>
      </S.Container>
    </>
  )
}
