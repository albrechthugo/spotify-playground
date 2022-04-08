import { NextApiRequest, NextApiResponse } from 'next'

import { config } from '~/core/config'

const USER_TOP_ARTISTS_ENDPOINT = `${config.spotify_base_url}/me/top/artists`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = JSON.parse(req.headers.token as string)

  const response = await fetch(USER_TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.json()

  return res.status(200).json({ data })
}
