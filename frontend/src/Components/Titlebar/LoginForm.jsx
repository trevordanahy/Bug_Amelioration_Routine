import React, { useRef, useState } from 'react'
import styled from 'styled-components'

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
  color: white;
  background: #5E809A;
  height: 40px;
  width: 80px;
`

export default function LoginForm ({ checkUser }) {
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

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      credentials: 'include'
    })

    const result = await res.json()

    if (result.err) {
      returnError(result.err)
    }

    checkUser()

    emailRef.current.value = ''
    passwordRef.current.value = ''
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
