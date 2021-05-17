import request from '../request'

export const fetchCommentsList = (blogId, offset, limit) => {
  console.log('coming here', blogId)
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
