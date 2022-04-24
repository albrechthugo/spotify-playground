import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import { Artist } from '~/core/entities'

interface DashboardProps {
  artists: Artist[]
}

const USER_TOP_ARTISTS_ENDPOINT = `${config.spotify_base_url}/me/top/artists`

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  console.log(req.cookies.token)

  const response = await fetch(USER_TOP_ARTISTS_ENDPOINT, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
      'Content-Type': 'application/json'
    }
  })

  const { items: artists } = await response.json()

  return {
    props: {
      artists
    }
  }
}

const Dashboard = ({ artists }: DashboardProps) => {
  return artists.map(({ id, name }) => <h1 key={id}>{name}</h1>)
}

Dashboard.layout = Layout

export default Dashboard
