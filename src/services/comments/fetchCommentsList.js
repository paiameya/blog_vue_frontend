import request from '../request'

export const fetchCommentsList = (blogId, offset, limit) => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(
        `/blog/${blogId}/comments?offset=${offset}&limit=${limit}`
      )
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
