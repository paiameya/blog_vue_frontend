import request from '../request'
import store from '../../store/index'

export const postComment = posting => {
  const { blogId, comment } = posting
  return new Promise((resolve, reject) => {
    try {
      let response = request.post(
        `/blog/${blogId}/comment`,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: store.state.sessionToken,
          },
        }
      )
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
