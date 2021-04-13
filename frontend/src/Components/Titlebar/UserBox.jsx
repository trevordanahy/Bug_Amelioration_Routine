import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'
import LogoutBttn from './LogoutBttn'

const url = 'http://localhost:8000/user/me'

const LoginBttn = styled.button`
  height: 30px;
  background-color: #1E1E21;
  color: #DCD7CB;
  border: #1E1E21;
  border-radius: 15px;
  flex-grow: .5;
  right: 20px;
`

const DisplayUser = styled.h3`
  color: #DCD7CB;
`

export default function UserBox () {
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
        <LoginModal open={isOpen} setOpen={setIsOpen} checkUser={checkUser} />
      </>
    )
  }
  return (
    <>
      <DisplayUser>{user}</DisplayUser>
      <LogoutBttn checkUser={checkUser} />
    </>
  )
}
