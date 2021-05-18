import request from '../request'

export const ssoLogin = query => {
  return new Promise((resolve, reject) => {
    try {
      console.log('query', query)
      let response = request.get(`/login/google?${query}`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
