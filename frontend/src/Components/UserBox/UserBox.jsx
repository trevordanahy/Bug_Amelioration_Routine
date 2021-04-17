import React, { useState } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'
import LogoutBttn from './LogoutBttn'

const LoginBttn = styled.button`
  height: 30px;
  background-color: #1E1E21;
  color: #DCD7CB;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
`

const DisplayUser = styled.h3`
  color: #DCD7CB;
`

export default function UserBox ({ checkLogin, user }) {
  const [isOpen, setIsOpen] = useState(false)

  const launchModal = () => {
    setIsOpen(true)
  }

  if (user) {
    return (
      <div>
        <DisplayUser>{user}</DisplayUser>
        <LogoutBttn checkLogin={checkLogin} />
      </div>
    )
  }

  return (
    <div>
      <LoginBttn onClick={launchModal}>Login</LoginBttn>
      <LoginModal open={isOpen} setOpen={setIsOpen} checkLogin={checkLogin} />
    </div>
  )
}
