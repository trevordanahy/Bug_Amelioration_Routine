import React, { useState, useEffect } from 'react'
import Header from '../style/Header'
import MainStyles from '../style/MainStyles'
import { getCurrentUser } from '../../adapters'
import Titlebar from './Titlebar'
import UserBox from './userBox/UserBox'
import Main from './Main'

export default function DiffuseLoginStatus ({ theme, flipTheme }) {
  const [user, setUser] = useState('')
  const checkLogin = async () => {
    try {
      const newUser = await getCurrentUser()
      setUser(newUser)
    } catch (err) {
      console.log(err.message)
    }
  }
  // console.log(`theme is ${theme.body}`)

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <>
      <Header>
        <Titlebar />
        <button onClick={flipTheme}>Theme</button>
        <UserBox user={user} checkLogin={checkLogin} />
      </Header>
      <MainStyles>
        <Main user={user} />
      </MainStyles>
    </>
  )
}
