import Image from 'next/image'
import { useRouter } from 'next/router'

import { Artist } from '~/types'

import * as S from './styles'

export interface DashboardProps {
  artists: Artist[]
}

const DashboardTemplate = ({ artists }: DashboardProps) => {
  const { push } = useRouter()

  return (
    <>
      <S.Container>
        {artists.map(
          ({ id, name, images, followers: { total: totalFollowers } }, i) => {
            const { url } = images[0]

            return (
              <S.ArtistWrapper
                key={id}
                isLastArtist={i === artists.length - 1}
                onClick={() => push(`/artist/${id}`)}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    minWidth: '10rem',
                    minHeight: '10rem'
                  }}
                >
                  <Image
                    src={url}
                    height={100}
                    width={100}
                    layout="responsive"
                  />
                </div>

                <div style={{ margin: '0 2rem' }}>
                  <S.ArtistName>{name}</S.ArtistName>
                  <S.ArtistFollowers>
                    Seguidores: {totalFollowers}
                  </S.ArtistFollowers>
                </div>
              </S.ArtistWrapper>
            )
          }
        )}
      </S.Container>
    </>
  )
}

export default DashboardTemplate
