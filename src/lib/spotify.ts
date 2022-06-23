import { config } from '~/core/config'
import { Artist, Playlist } from '~/core/entities'

const QUERY_PARAMS = new URLSearchParams({ limit: '10' })
const USER_ENDPOINT = `${config.spotify_base_url}/me`
const USER_TOP_ARTISTS_ENDPOINT = `${USER_ENDPOINT}/top/artists?${QUERY_PARAMS}`

export const getUserInfo = async (token: string): Promise<string> => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(USER_ENDPOINT, options)

  const { display_name: user } = await response.json()

  return user
}

export const getTopArtists = async (token: string): Promise<Artist[]> => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(USER_TOP_ARTISTS_ENDPOINT, options)

  const { items: artists } = await response.json()

  return artists
}

export const getPlaylists = async (token: string): Promise<Playlist[]> => {
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

export const unfollowPlaylist = async (
  playlistId: string,
  token: string
): Promise<void> => {
  const UNFOLLOW_PLAYLIST_ENDPOINT = `${config.spotify_base_url}/playlists/${playlistId}/followers`
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  await fetch(UNFOLLOW_PLAYLIST_ENDPOINT, options)
}
