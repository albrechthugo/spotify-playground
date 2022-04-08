import { Image } from './image'

export interface Artist {
  followers: { total: number }
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
}
