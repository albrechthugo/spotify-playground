import { useCallback, useState } from 'react'
import { useCookies } from 'react-cookie'

import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import { Playlist } from '~/core/entities'
import PlaylistsTemplate, { PlaylistsProps } from '~/templates/Playlists'

const USER_PLAYLISTS_ENDOINT = `${config.spotify_base_url}/me/playlists`

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(USER_PLAYLISTS_ENDOINT, options)

  const { items: playlists } = await response.json()

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
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(USER_PLAYLISTS_ENDOINT, {
      ...options
    })

    const { items: playlists } = await response.json()

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
