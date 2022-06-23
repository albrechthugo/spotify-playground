import { getRequestInit } from './getRequestInit'

describe('getRequestInit(token, method)', () => {
  it('should return request init options correctly', () => {
    expect(getRequestInit('testToken', 'POST')).toStrictEqual({
      method: 'POST',
      headers: {
        Authorization: 'Bearer testToken',
        'Content-Type': 'application/json'
      }
    })
  })

  it(`should return request init options with GET method by default if the argument wasn't provided`, () => {
    expect(getRequestInit('testToken')).toStrictEqual({
      method: 'GET',
      headers: {
        Authorization: 'Bearer testToken',
        'Content-Type': 'application/json'
      }
    })
  })
})
