import React, { useState } from 'react'
import { UserBttn, DisplayUser } from '../../style/userBox/UserBoxStyles'
import AuthModal from './AuthModal'
import { logout } from '../../../adapters'

export default function UserBox ({ user, checkLogin }) {
  const [isOpen, setIsOpen] = useState(false)

  const launchModal = () => {
    setIsOpen(true)
  }

  const logoutPipe = async () => {
    const result = await logout()
    if (result.status === 'success') {
      console.log('here')
      checkLogin()
    }
  }

  if (user) {
    return (
      <div>
        <DisplayUser>{user}</DisplayUser>
        <UserBttn onClick={logoutPipe}>Logout</UserBttn>
      </div>
    )
  }

  return (
    <div>
      <UserBttn onClick={launchModal}>Login</UserBttn>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} checkLogin={checkLogin} />
    </div>
  )
}
