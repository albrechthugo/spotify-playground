import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { config } from '~/core/config'
import ArtistTemplate, { ArtistProps } from '~/templates/Artist'

const GET_ARTIST_ENDPOINT = `${config.spotify_base_url}/artists`

export async function getServerSideProps({
  query,
  req
}: GetServerSidePropsContext) {
  const { id } = query

  const response = await fetch(`${GET_ARTIST_ENDPOINT}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
      'Content-Type': 'application/json'
    }
  })

  const artist = await response.json()

  return {
    props: {
      artist
    }
  }
}

const ArtistPage = ({ artist }: ArtistProps) => (
  <ArtistTemplate artist={artist} />
)

ArtistPage.layout = Layout

export default ArtistPage
