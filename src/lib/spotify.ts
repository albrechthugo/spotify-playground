import { config } from '~/core/config'

export const getPlaylists = async (token: string) => {
  const USER_PLAYLISTS_ENDOINT = `${config.spotify_base_url}/me/playlists`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(USER_PLAYLISTS_ENDOINT, options)

  const { items: playlists } = await response.json()

  return playlists
}

export const unfollowPlaylist = async (playlistId: string, token: string) => {
  const UNFOLLOW_PLAYLIST_ENDPOINT = `${config.spotify_base_url}/playlists/${playlistId}/followers`
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  await fetch(UNFOLLOW_PLAYLIST_ENDPOINT, options)
}
