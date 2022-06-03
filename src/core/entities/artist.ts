import { Image } from './image'

export interface Artist {
  followers: { total: number }
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  topTracks?: TopTracks[]
}

export interface TopTracks {
  artists: Pick<Artist, 'id' | 'name'>[]
  duration_ms: number
  external_urls: { spotify: string }
  id: string
  name: string
  preview_url: string
}
