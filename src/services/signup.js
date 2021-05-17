import request from './request'

export const emailSignup = (name, email, password) => {
  console.log('coming here abc cdf')
  return new Promise((resolve, reject) => {
    try {
      let response = request.post('/signup', {
        name: name,
        email: email,
        password: password,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
