import create from 'zustand'

import { Playlist } from '~/types'

interface PlaylistStoreProps {
  playlists: Playlist[]
  fetch: () => Promise<void>
}

export const usePlaylists = create<PlaylistStoreProps>((set) => ({
  playlists: [],
  fetch: async () => {
    set({
      playlists: await fetch('api/me/playlists').then((res) => res.json())
    })
  }
}))
