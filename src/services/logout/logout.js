import request from '../request'
export const logout = token => {
  return new Promise((resolve, reject) => {
    try {
      let response = request.post(
        `/logout`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
