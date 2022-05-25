import Image from 'next/image'

import { Artist } from '~/core/entities'

import * as S from './styles'

export interface ArtistProps {
  artist: Artist
}

const ArtistTemplate = ({ artist: { name, images } }: ArtistProps) => {
  const [{ url }] = images

  return (
    <S.Container>
      <S.ArtistWrapper data-testid="artist-template__wrapper">
        <S.MainInfoWrapper>
          <S.ImageWrapper data-testid="artist-template__image-wrapper">
            <Image src={url} width="200" height="200" />
          </S.ImageWrapper>
          <S.Name>{name}</S.Name>
        </S.MainInfoWrapper>
      </S.ArtistWrapper>
    </S.Container>
  )
}

export default ArtistTemplate
