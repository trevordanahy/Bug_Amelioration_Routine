const axios = require('axios')

// API Endpoints
const meUrl = 'http://localhost:8000/user/me'
const registerUrl = 'http://localhost:8000/user/register'
const loginUrl = 'http://localhost:8000/user/login'
const logoutUrl = 'http://localhost:8000/user/logout'

// CHECK LOGIN STATUS
export const getCurrentUser = async () => {
  try {
    const res = await axios.get(meUrl, { withCredentials: true })
    return res.data.username
  } catch (err) {
    if (err.response.status === 401) {
      return ''
    } else {
      console.log(err.message)
    }
  }
}

// REGISTER
export const register = async (postData) => {
  try {
    const result = await axios.post(registerUrl, postData, { withCredentials: true })
    return { status: result.status, data: result.data.detail }
  } catch (err) {
    return { status: err.response.status, data: err.response.data.detail }
    // if (err.response.status === 409) {
    //   return { status: err.response.status, data: err.response.data.detail }
    // } else {
    //   console.log(err.message)
    // }
  }

  // axios.post(registerUrl, postData, )
  //   .then((res) => {
  //     return { status: 'success', data: res.response.status }
  //   })
  //   .catch((err) => {
  //     if (err.response.status === 409) {
  //       return { status: 'error', data: err.response.data.detail }
  //     } else {
  //       console.log(err.message)
  //     }
  //   })
}

// LOGIN
export const login = async (postData) => {
  try {
    const result = await axios.post(loginUrl, postData, { withCredentials: true })
    return { status: 'success', data: result.status }
  } catch (err) {
    if (err.response.status === 401) {
      return { status: 'error', data: err.response.data.detail }
    } else {
      console.log(err.message)
    }
  }
}

// LOGOUT
export const logout = async () => {
  try {
    const result = await axios.get(logoutUrl, { withCredentials: true })
    return { status: 'success', data: result.status }
  } catch (err) {
    console.log(err.mes)
  }
}
