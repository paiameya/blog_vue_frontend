import request from '../request'

export const fetchAuthorDetails = blogId => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blog/${blogId}`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
