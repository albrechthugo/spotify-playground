import { NextApiRequest, NextApiResponse } from 'next'

import { getPlaylists } from '~/lib'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token || ''
  res.status(200).json(await getPlaylists(token))
}
