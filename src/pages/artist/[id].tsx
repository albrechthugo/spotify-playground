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

  const options: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.cookies.token}`,
      'Content-Type': 'application/json'
    }
  }

  const responses = await Promise.all([
    fetch(`${GET_ARTIST_ENDPOINT}/${id}`, options),
    fetch(`${GET_ARTIST_ENDPOINT}/${id}/top-tracks?market=BR`, options)
  ])

  const [artist, { tracks: topTracks }] = await Promise.all([
    responses[0].json(),
    responses[1].json()
  ])

  return {
    props: {
      artist: {
        ...artist,
        topTracks
      }
    }
  }
}

const ArtistPage = ({ artist }: ArtistProps) => (
  <ArtistTemplate artist={artist} />
)

ArtistPage.layout = Layout

export default ArtistPage
