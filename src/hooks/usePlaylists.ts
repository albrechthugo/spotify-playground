import create from 'zustand'

import { getPlaylists } from '~/lib'
import { Playlist } from '~/types'

interface PlaylistStoreProps {
  playlists: Playlist[]
  fetch: (token: string) => Promise<void>
}

export const usePlaylists = create<PlaylistStoreProps>((set) => ({
  playlists: [],
  fetch: async (token: string) => {
    set({ playlists: await getPlaylists(token) })
  }
}))
