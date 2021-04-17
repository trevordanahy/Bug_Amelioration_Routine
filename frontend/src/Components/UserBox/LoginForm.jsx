import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const axios = require('axios')

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: bold;
`

const InputLabel = styled.label`
  margin: 15px 0px 5px;
  font-weight: bold;
`

const LoginBttn = styled.button`
  color: #DCD7CB;
  background: #5E809A;
  height: 40px;
  width: 80px;
  margin: 10px;
`

export default function LoginForm ({ checkLogin }) {
  const url = 'http://localhost:8000/user/login'
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [error, setError] = useState('')

  function returnError (message) {
    setError(message)
  }

  async function loginUser () {
    const inputEmail = emailRef.current.value
    const inputPassword = passwordRef.current.value
    const postData = { email: inputEmail, password: inputPassword }

    axios.post(url, postData, { withCredentials: true })
      .then(() => {
        checkLogin()
      })
      .catch((err) => {
        if (err.response.status === 401) {
          returnError(err.response.data.detail)
        }
      })
      .finally(
        emailRef.current.value = '',
        passwordRef.current.value = ''
      )
  }

  return (
    <>
      <h1>Login</h1>
      <InputLabel htmlFor='email'>Email:</InputLabel>
      <input ref={emailRef} type='email' id='email' />
      <InputLabel htmlFor='password'>Password:</InputLabel>
      <input ref={passwordRef} type='password' id='password' />
      <ErrorMsg>{error}</ErrorMsg>
      <LoginBttn onClick={loginUser}><b>Login</b></LoginBttn>
    </>
  )
}