import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'
// import LoginForm from './LoginForm'

const url = 'http://localhost:8000/user/me'

const LoginBttn = styled.button`
  height: 30px;
  background-color: #1E1E21;
  color: #DCD7CB;
  border: #1E1E21;
  border-radius: 3px;
`

export default function User() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const launchModal = () => {
    setIsOpen(true)
  }

  const checkUser = async () => {
    const res = await fetch(url, { credentials: 'include' })
    const userData = await res.json()
    setUser(userData.username)
    setLoading(false)
  }

  useEffect(() => {
    checkUser()
  }, [])

  if (loading) {
    return (<h3>...</h3>)
  } else if (!user) {
    return (
      <>
        <LoginBttn onClick={launchModal}>Login</LoginBttn>
        <LoginModal open={isOpen} checkUser={checkUser} onClose={() => setIsOpen(false)} />
      </>
    )
  }
  return (
    <div>
      <h3>{user}</h3>
    </div>
  )
}
