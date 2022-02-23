import { Config } from '~/types'

export const config: Config = {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
  auth_base_url: process.env.NEXT_PUBLIC_AUTH_API_BASE_URL as string,
  scopes: process.env.NEXT_PUBLIC_AUTH_SCOPES as string
}
