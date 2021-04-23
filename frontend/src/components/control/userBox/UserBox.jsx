import React, { useState } from 'react'
import { UserBttn, DisplayUser } from '../../style/userBox/UserBoxStyles'
import LoginModal from './AuthModal'
import { logout } from '../../../adapters'

export default function UserBox ({ user }) {
  const [isOpen, setIsOpen] = useState(false)

  const launchModal = () => {
    setIsOpen(true)
  }

  if (user) {
    return (
      <div>
        <DisplayUser>{user}</DisplayUser>
        <UserBttn onClick={logout}>Logout</UserBttn>
      </div>
    )
  }

  return (
    <div>
      <UserBttn onClick={launchModal}>Login</UserBttn>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
