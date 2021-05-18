import { request } from './index.js'
export const logout = token => {
  return new Promise((resolve, reject) => {
    try {
      console.log('token', token)
      let response = request.post(`/logout`, {
        headers: { Authorization: token },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
