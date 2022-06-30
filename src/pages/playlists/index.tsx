import { useCallback, useEffect } from 'react'

import { Layout } from '~/components'
import { usePlaylists } from '~/hooks'
import PlaylistsTemplate from '~/templates/Playlists'

const Playlists = () => {
  const { playlists, fetch } = usePlaylists(({ playlists, fetch }) => ({
    playlists,
    fetch
  }))

  const updatePlaylists = useCallback(async () => {
    await fetch()
  }, [fetch])

  useEffect(() => {
    updatePlaylists()
  }, [updatePlaylists])

  return <PlaylistsTemplate playlists={playlists} />
}

Playlists.layout = Layout

export default Playlists
