import cookie from 'cookie'
import { IncomingMessage } from 'http'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'

export function parseCookies(
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): { [key: string]: string } {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}
