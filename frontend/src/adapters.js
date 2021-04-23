const axios = require('axios')

// API Endpoints
const meUrl = 'http://localhost:8000/user/me'
const loginUrl = 'http://localhost:8000/user/login'
const logoutUrl = 'http://localhost:8000/user/logout'
const registerUrl = 'http://localhost:8000/user/register'

// CHECK LOGIN STATUS
export const checkLogin = async () => {
  axios.get(meUrl, { withCredentials: true })
    .then((res) => {
      return res.data.username
    })
    .catch((err) => {
      console.log(err.response)
      if (err.response.status === 401) {
        return ''
      } else { console.log(err) }
    })
}

// LOGIN
export const login = async (postData) => {
  axios.post(loginUrl, postData, { withCredentials: true })
    .then(() => {
      checkLogin()
    })
    .catch((err) => {
      if (err.response.status === 401) {
        return (err.response.data.detail)
      } else {
        console.log(err)
        return false
      }
    })
    .finally(

    )
}

// LOGOUT
export const logout = async () => {
  axios.get(logoutUrl, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        checkLogin()
      }
    })
    .catch((err) => console.log(err))
}

// REGISTER
export const register = async (postData) => {
  axios.post(registerUrl, postData, { withCredentials: true })
    .then((res) => {
      if (res.status === 201) {
        return res.status
      }
    })
    .catch((err) => {
      if (err.response.status === 409) {
        return (err.response.data.detail)
      } else {
        console.log(err.message)
      }
    })
}
