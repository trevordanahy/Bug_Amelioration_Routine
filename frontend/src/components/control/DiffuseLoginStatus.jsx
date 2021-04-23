import React, { useState, useEffect } from 'react'
import Header from '../style/Header'
import MainStyles from '../style/MainStyles'
import { checkLogin } from '../../adapters'
import Titlebar from './Titlebar'
import UserBox from './userBox/UserBox'
import Main from './Main'

export default function DiffuseLoginStatus () {
  const [user, setUser] = useState('')

  useEffect(() => {
    async function checkLoginWrapper () {
      const result = await checkLogin()
      if (!result) {
        setUser('')
      } else {
        setUser(result)
      }
    }
    checkLoginWrapper()
  }, [])

  return (
    <>
      <Header>
        <Titlebar />
        <UserBox user={user} />
      </Header>
      <MainStyles>
        <Main />
      </MainStyles>
    </>
  )
}
