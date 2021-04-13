import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'

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

const UserDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const DisplayUser = styled.h3`
  justify-self: center;
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
    <UserDiv>
      <DisplayUser>{user}</DisplayUser>
    </UserDiv>
  )
}
