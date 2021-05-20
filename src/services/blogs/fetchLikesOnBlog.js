import request from '../request'
import store from '../../store/index'

export const fetchLikesOnBlog = blogId => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.get(`/blog/${blogId}/like`, {
        headers: {
          Authorization: store.state.sessionToken,
        },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
