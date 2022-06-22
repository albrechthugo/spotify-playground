import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'

interface ConfirmUnfollowPlaylistProps {
  isOpen: boolean
  playlistName: string
  handleClose: (hasConfirmation?: boolean) => void
}

export const ConfirmUnfollowPlaylist = ({
  isOpen,
  handleClose,
  playlistName
}: ConfirmUnfollowPlaylistProps) => {
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
          Deseja mesmo deixar de seguir a playlist: {playlistName}?
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
