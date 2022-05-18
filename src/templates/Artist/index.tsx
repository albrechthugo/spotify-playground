import Image from 'next/image'

import { Artist } from '~/core/entities'

import * as S from './styles'

export interface ArtistProps {
  artist: Artist
}

const ArtistTemplate = ({
  artist: { name, followers, genres, images }
}: ArtistProps) => {
  const [image] = images

  return (
    <S.Container>
      <S.MainInfoWrapper>
        <S.ImageWrapper>
          <Image src={image.url} width={image.width} height={image.height} />
        </S.ImageWrapper>
        <S.Name>{name}</S.Name>
      </S.MainInfoWrapper>
    </S.Container>
  )
}

export default ArtistTemplate
