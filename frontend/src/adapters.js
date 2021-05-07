const axios = require('axios')

// API Endpoints
const apiURL = 'http://localhost:8000/'
const meUrl = apiURL + 'user/me'
const registerUrl = apiURL + 'user/register'
const loginUrl = apiURL + 'user/login'
const logoutUrl = apiURL + 'user/logout'

const buglogURL = apiURL + 'log/buglog'
const bugURL = apiURL + 'log/bug/'

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
  }
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

export const getLogs = async () => {
  try {
    const log = await axios.get(buglogURL, { withCredentials: true })
    return log
  } catch (err) {
    console.log(err.response.data.detail)
  }
}

export const deleteBug = async (id) => {
  try {
    const url = bugURL + id
    console.log(url)
    const res = await axios.delete((bugURL + id), { withCredentials: true })
    return res
  } catch (err) {
    console.log(console.log(err.message))
  }
}
