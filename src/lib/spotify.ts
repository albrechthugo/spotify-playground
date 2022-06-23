import { config } from '~/core/config'
import { Artist, Playlist } from '~/core/entities'
import { getRequestInit } from '~/helpers'

const QUERY_PARAMS = new URLSearchParams({ limit: '10' })
const USER_ENDPOINT = `${config.spotify_base_url}/me`
const USER_TOP_ARTISTS_ENDPOINT = `${USER_ENDPOINT}/top/artists?${QUERY_PARAMS}`

export const getUserInfo = async (token: string): Promise<string> => {
  const response = await fetch(USER_ENDPOINT, getRequestInit(token))

  const { display_name: user } = await response.json()

  return user
}

export const getTopArtists = async (token: string): Promise<Artist[]> => {
  const response = await fetch(USER_TOP_ARTISTS_ENDPOINT, getRequestInit(token))

  const { items: artists } = await response.json()

  return artists
}

export const getArtistInfo = async (
  artistId: string,
  token: string
): Promise<Artist> => {
  const GET_ARTIST_ENDPOINT = `${config.spotify_base_url}/artists`

  const responses = await Promise.all([
    fetch(`${GET_ARTIST_ENDPOINT}/${artistId}`, getRequestInit(token)),
    fetch(
      `${GET_ARTIST_ENDPOINT}/${artistId}/top-tracks?market=BR`,
      getRequestInit(token)
    )
  ])

  const [artist, { tracks: topTracks }] = await Promise.all([
    responses[0].json(),
    responses[1].json()
  ])

  return {
    ...artist,
    topTracks
  }
}

export const getPlaylists = async (token: string): Promise<Playlist[]> => {
  const USER_PLAYLISTS_ENDOINT = `${config.spotify_base_url}/me/playlists`

  const response = await fetch(USER_PLAYLISTS_ENDOINT, getRequestInit(token))

  const { items: playlists } = await response.json()

  return playlists
}

export const unfollowPlaylist = async (
  playlistId: string,
  token: string
): Promise<void> => {
  const UNFOLLOW_PLAYLIST_ENDPOINT = `${config.spotify_base_url}/playlists/${playlistId}/followers`

  await fetch(UNFOLLOW_PLAYLIST_ENDPOINT, getRequestInit(token, 'DELETE'))
}
