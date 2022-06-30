import { useCallback, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import { Layout } from '~/components'
import { usePlaylists } from '~/hooks'
import PlaylistsTemplate from '~/templates/Playlists'

const Playlists = () => {
  const [{ token }] = useCookies(['token'])
  const { playlists, fetch } = usePlaylists(({ playlists, fetch }) => ({
    playlists,
    fetch
  }))

  const updatePlaylists = useCallback(async () => {
    await fetch(token)
  }, [fetch, token])

  useEffect(() => {
    updatePlaylists()
  }, [updatePlaylists])

  return <PlaylistsTemplate playlists={playlists} />
}

Playlists.layout = Layout

export default Playlists
