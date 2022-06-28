import { useCallback, useState } from 'react'
import { useCookies } from 'react-cookie'

import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { getPlaylists } from '~/lib'
import PlaylistsTemplate, { PlaylistsProps } from '~/templates/Playlists'
import { Playlist } from '~/types'

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const playlists = await getPlaylists(req.cookies.token)

  return {
    props: {
      playlists
    }
  }
}

const Playlists = ({ playlists }: PlaylistsProps) => {
  const [{ token }] = useCookies(['token'])
  const [currentPlaylists, setCurrentPlaylists] =
    useState<Playlist[]>(playlists)

  const updatePlaylistsHandler = useCallback(async () => {
    const playlists = await getPlaylists(token)
    setCurrentPlaylists(playlists)
  }, [token])

  return (
    <PlaylistsTemplate
      playlists={currentPlaylists}
      updatePlaylistsHandler={updatePlaylistsHandler}
    />
  )
}

Playlists.layout = Layout

export default Playlists
