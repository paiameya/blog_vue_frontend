import request from '../request'

export const putLikes = (blogId, authorId, review) => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.patch(`/blog/${blogId}/like/user/${authorId}`, {
        review: review,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
