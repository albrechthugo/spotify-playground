import { config } from '~/core/config'

const USER_PLAYLISTS_ENDOINT = `${config.spotify_base_url}/me/playlists`

export const getPlaylists = async (token: string) => {
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
