import { useEffect } from 'react'

import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { Artist } from '~/core/entities'
import { useUser } from '~/hooks'
import { getUserInfo } from '~/lib'
import { DashboardProps } from '~/templates'
import DashboardTemplate from '~/templates/Dashboard'

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const token = req.cookies.token

  const responses = await Promise.all([
    getUserInfo(token)
    // getTopArtists(token)
  ])

  const user = responses[0]
  const artists = [] as Artist[]

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
