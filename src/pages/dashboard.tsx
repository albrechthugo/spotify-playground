import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import { Artist } from '~/core/entities'

interface DashboardProps {
  artists: Artist[]
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const response = await fetch(`${config.api_base_url}/user-top-artists`, {
    headers: { token: req.cookies.token }
  })

  const {
    data: { items }
  } = await response.json()

  return {
    props: {
      artists: items
    }
  }
}

const Dashboard = ({ artists }: DashboardProps) => {
  return artists.map(({ id, name }) => <h1 key={id}>{name}</h1>)
}

Dashboard.layout = Layout

export default Dashboard
