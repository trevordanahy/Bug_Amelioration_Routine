import React, { useRef } from 'react'

export default function LoginForm ({ checkUser }) {
  const url = 'http://localhost:8000/user/login'
  const emailRef = useRef('')
  const passwordRef = useRef('')

  async function loginUser () {
    const inputEmail = emailRef.current.value
    const inputPassword = passwordRef.current.value
    const postData = { email: inputEmail, password: inputPassword }

    emailRef.current.value = ''
    passwordRef.current.value = ''

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      credentials: 'include'
    })
    const result = await res.json()

    console.log(result)
    checkUser()
  }

  return (
    <div id='loginForm'>
      <label htmlFor='email'>Email</label>
      <input ref={emailRef} type='text' id='email' />
      <label htmlFor='password'>Password</label>
      <input ref={passwordRef} type='text' id='password' />
      <button onClick={loginUser}>Login</button>
    </div>
  )
}
