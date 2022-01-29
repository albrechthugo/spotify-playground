type ConfigProps = {
  client_id: string
  redirect_uri: string
}

export const config: ConfigProps = {
  client_id: process.env.CLIENT_ID as string,
  redirect_uri: process.env.REDIRECT_URI as string
}
