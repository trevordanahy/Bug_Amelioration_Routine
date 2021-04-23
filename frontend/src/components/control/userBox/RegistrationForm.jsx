import React, { useRef, useState } from 'react'
import { ErrorMsg, InputLabel, AuthBttn } from '../../style/userBox/AuthFormStyles'
import { register } from '../../../adapters'

export default function RegistrationForm ({ switchToLogin }) {
  const emailRef = useRef('')
  const usernameRef = useRef('')
  const passwordRef = useRef('')
  const confPasswordRef = useRef('')
  const [error, setError] = useState('')

  function createPostData () {
    const data = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confPassword: confPasswordRef.current.value
    }
    return data
  }

  function passwordCheck (password, confPassword) {
    return (password === confPassword)
  }

  async function registerPipe () {
    const postData = createPostData()
    const formIsValid = passwordCheck(postData.password, postData.confPassword)

    if (!formIsValid) {
      setError('Passwords do not match.')
    }

    const result = register(postData)
    if (result === 201) {
      switchToLogin()
    } else {
      setError(result)
    }
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
      <AuthBttn onClick={registerPipe}>Register</AuthBttn>
    </>
  )
}
