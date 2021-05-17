import request from '../request'

export const fetchBlogList = (params) => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blogs/${params}`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
