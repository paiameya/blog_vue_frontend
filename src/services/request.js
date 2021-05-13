import axios from 'axios'
const request = axios.create({
  baseURL: process.env.BLOG_APP_API,
  headers: {},
  validateStatus: function () {
    return true
  },
})

export default request
