import React, { useRef, useState } from 'react'
import { ErrorMsg, InputLabel, AuthBttn } from '../../style/userBox/AuthFormStyles'
import { login } from '../../../adapters'

export default function LoginForm ({ checkLogin }) {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const [error, setError] = useState('')

  function createPostData (emailRef, passwordRef) {
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    return data
  }

  const loginPipe = async () => {
    const postData = createPostData(emailRef, passwordRef)
    const result = await login(postData)
    if (result.status === 'success') {
      checkLogin()
    } else {
      setError(result.data)
    }
    checkLogin()
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
