import { useCallback, useEffect, useState } from 'react'

import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { ConfirmUnfollowPlaylist } from '../ConfirmUnfollowPlaylist'
import * as S from './styles'

interface UnfollowPlaylistButtonProps {
  handleUnfollow: () => Promise<void>
  playlistName: string
}

export const UnfollowPlaylistButton = ({
  handleUnfollow,
  playlistName
}: UnfollowPlaylistButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = useCallback(
    async (hasConfirmation = false) => {
      if (hasConfirmation) await handleUnfollow()

      setIsOpen(false)
    },
    [handleUnfollow]
  )

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <S.Container onClick={handleOpen}>
        <IconButton aria-label="Deixar de seguir playlist">
          <Close color="primary" fontSize="large" />
        </IconButton>
      </S.Container>

      <ConfirmUnfollowPlaylist
        isOpen={isOpen}
        handleClose={handleClose}
        playlistName={playlistName}
      />
    </>
  )
}
