import request from '../request'

export const postComment = (posting) => {
  const {blogId,userId,comment}=posting
  return new Promise((resolve, reject) => {
    try {
      let response = request.post(`/blog/${blogId}/comment`,{
          userId:userId,
          text:comment
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
