import { useEffect } from 'react'

import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import { useUser } from '~/hooks'
import { DashboardProps } from '~/templates'
import DashboardTemplate from '~/templates/Dashboard'

const QUERY_PARAMS = new URLSearchParams({ limit: '10' })
const USER_ENDPOINT = `${config.spotify_base_url}/me`
const USER_TOP_ARTISTS_ENDPOINT = `${USER_ENDPOINT}/top/artists?${QUERY_PARAMS}`

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
      'Content-Type': 'application/json'
    }
  }

  const responses = await Promise.all([
    fetch(USER_ENDPOINT, options),
    fetch(USER_TOP_ARTISTS_ENDPOINT, options)
  ])

  const [{ display_name: user }, { items: artists }] = await Promise.all([
    responses[0].json(),
    responses[1].json()
  ])

  return {
    props: {
      artists,
      user
    }
  }
}

const Dashboard = ({ artists, user }: DashboardProps & { user: string }) => {
  const { setCurrentUser } = useUser()

  useEffect(() => {
    setCurrentUser(user)
  }, [user, setCurrentUser])

  return <DashboardTemplate artists={artists} />
}

Dashboard.layout = Layout

export default Dashboard
