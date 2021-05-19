import request from '../request'

export const getUserLikesOnBlog = (blogId, authorId) => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blog/${blogId}/like/user/${authorId}`)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
