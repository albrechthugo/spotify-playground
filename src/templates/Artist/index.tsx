import Image from 'next/image'

import { Artist } from '~/core/entities'

import * as S from './styles'

export interface ArtistProps {
  artist: Artist
}

const ArtistTemplate = ({
  artist: { name, images, topTracks }
}: ArtistProps) => {
  const [{ url }] = images

  return (
    <S.Container>
      <S.ArtistWrapper data-testid="artist-template__wrapper">
        <S.MainInfoWrapper>
          <S.ImageWrapper data-testid="artist-template__image-wrapper">
            <Image src={url} width="200" height="200" layout="fixed" />
          </S.ImageWrapper>
          <S.Name>{name}</S.Name>
        </S.MainInfoWrapper>
      </S.ArtistWrapper>

      <S.TopTracksWrapper>
        <S.TopTracksTitle>Melhores Faixas</S.TopTracksTitle>
      </S.TopTracksWrapper>
    </S.Container>
  )
}

export default ArtistTemplate
