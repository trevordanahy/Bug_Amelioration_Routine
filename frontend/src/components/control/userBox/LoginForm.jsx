import React, { useRef, useState } from 'react'
import { ErrorMsg, InputLabel, AuthBttn } from '../../style/userBox/AuthFormStyles'
import { login } from '../../../adapters'

export default function LoginForm () {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [error, setError] = useState('')

  function loginPipe (email, password) {
    const currentEmail = emailRef.current.value
    const currentPassword = passwordRef.current.value

    const result = login(currentEmail, currentPassword)
    if (result) {
      passwordRef.current.value = ''
      setError(result)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <InputLabel htmlFor='email'>Email:</InputLabel>
      <input ref={emailRef} type='email' id='email' />
      <InputLabel htmlFor='password'>Password:</InputLabel>
      <input ref={passwordRef} type='password' id='password' />
      <ErrorMsg>{error}</ErrorMsg>
      <AuthBttn onClick={loginPipe}><b>Login</b></AuthBttn>
    </>
  )
}
