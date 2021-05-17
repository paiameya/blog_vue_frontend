import request from '../request'

export const fetchAuthorDetails = userId => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/author/${userId}`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
