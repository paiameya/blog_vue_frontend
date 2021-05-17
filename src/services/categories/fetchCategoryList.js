import request from '../request'

export const fetchCategory = () => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/category`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
