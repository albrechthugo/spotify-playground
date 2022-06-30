import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { useCookies } from 'react-cookie'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'

import { usePlaylists } from '~/hooks'
import { unfollowPlaylist } from '~/lib'
import { Playlist } from '~/types'

interface ConfirmUnfollowPlaylistProps {
  playlist: Playlist
}

export const ConfirmUnfollowPlaylist = forwardRef(
  ({ playlist }: ConfirmUnfollowPlaylistProps, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [{ token }] = useCookies(['token'])
    const updatePlaylists = usePlaylists(({ fetch }) => fetch)

    const handleOpen = () => setIsOpen(true)

    const handleClose = useCallback(
      async (hasConfirmation = false) => {
        if (hasConfirmation) {
          await unfollowPlaylist(playlist.id, token)
          await updatePlaylists(token)
        }

        setIsOpen(false)
      },
      [token, playlist.id, updatePlaylists]
    )

    useImperativeHandle(
      ref,
      () => ({
        handleOpen,
        handleClose
      }),
      [handleClose]
    )

    return (
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: '1.8rem' }}
          >
            Deseja mesmo deixar de seguir a playlist: {playlist.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose()}
            sx={{ fontSize: '1.4rem', color: 'text.secondary' }}
          >
            Não
          </Button>

          <Button
            variant="contained"
            onClick={() => handleClose(true)}
            sx={{ fontSize: '1.4rem', color: 'text.secondary' }}
          >
            Deixar de seguir
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
)
