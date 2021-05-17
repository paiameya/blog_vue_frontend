import request from '../request'

export const fetchBlogList = () => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blogs`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
