type HttpMethods = 'GET' | 'DELETE' | 'PUT' | 'POST' | 'PATCH'

export const getRequestInit = (
  token: string,
  method: HttpMethods = 'GET'
): RequestInit => ({
  method,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
