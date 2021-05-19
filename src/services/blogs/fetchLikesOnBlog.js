import request from '../request'

export const fetchLikesOnBlog = blogId => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blog/${blogId}/like`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
