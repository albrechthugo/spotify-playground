import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
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
  return <PlaylistsTemplate playlists={playlists} />
}

Playlists.layout = Layout

export default Playlists
