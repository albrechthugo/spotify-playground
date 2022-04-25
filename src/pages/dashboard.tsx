import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import { DashboardProps } from '~/templates'
import DashboardTemplate from '~/templates/Dashboard'

const QUERY_PARAMS = new URLSearchParams({ limit: '10' })
const USER_TOP_ARTISTS_ENDPOINT = `${config.spotify_base_url}/me/top/artists?${QUERY_PARAMS}`

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
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
  return <DashboardTemplate artists={artists} />
}

Dashboard.layout = Layout

export default Dashboard
