import { GetServerSidePropsContext } from 'next'

import { Layout } from '~/components'
import { getArtistInfo } from '~/lib'
import ArtistTemplate, { ArtistProps } from '~/templates/Artist'

export async function getServerSideProps({
  query,
  req
}: GetServerSidePropsContext) {
  const { id } = query

  const artist = await getArtistInfo(id as string, req.cookies.token)

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
