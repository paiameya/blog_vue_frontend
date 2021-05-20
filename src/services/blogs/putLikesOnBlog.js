import request from '../request'
import store from '../../store/index'
export const putLikesOnBlog = (blogId, userId, review) => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.patch(
        `/blog/${blogId}/like/user`,
        {
          review: review,
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
