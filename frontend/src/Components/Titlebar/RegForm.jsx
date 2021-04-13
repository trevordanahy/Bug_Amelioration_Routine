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

const RegistrationBttn = styled.button`
  color: white;
  background: #5E809A;
  height: 40px;
  width: 80px;
`

export default function RegForm ({ switchToLogin }) {
  const url = 'http://localhost:8000/user/register'
  const emailRef = useRef('')
  const usernameRef = useRef('')
  const passwordRef = useRef('')
  const confPasswordRef = useRef('')
  const [error, setError] = useState('')

  function returnError (message) {
    setError(message)
  }

  async function registerUser () {
    const iEmail = emailRef.current.value
    const iUsername = usernameRef.current.value
    const iPassword = passwordRef.current.value
    const iconfPassword = confPasswordRef.current.value

    if (iPassword !== iconfPassword) {
      returnError('Passwords do not match.')
      return null
    }

    const postData = {
      email: iEmail,
      username: iUsername,
      password: iPassword
    }

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      credentials: 'include'
    })

    const result = await res.json()

    emailRef.current.value = ''
    usernameRef.current.value = ''
    passwordRef.current.value = ''
    confPasswordRef.current.value = ''

    if (result.detail) {
      returnError(result.detail)
      return null
    }

    switchToLogin()
  }

  return (
    <>
      <h1>Register</h1>
      <InputLabel htmlFor='email'>Email:</InputLabel>
      <input ref={emailRef} type='text' id='email' />
      <InputLabel htmlFor='email'>Username:</InputLabel>
      <input ref={usernameRef} type='text' id='username' />
      <InputLabel htmlFor='email'>Password:</InputLabel>
      <input ref={passwordRef} type='password' id='password' />
      <InputLabel htmlFor='email'>Confirm Password:</InputLabel>
      <input ref={confPasswordRef} type='password' id='password' />
      <ErrorMsg>{error}</ErrorMsg>
      <RegistrationBttn onClick={registerUser}><b>Register</b></RegistrationBttn>
    </>
  )
}
