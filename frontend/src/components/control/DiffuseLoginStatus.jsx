import React, { useState, useEffect } from 'react'
import MainStyles from '../style/MainStyles'
import { getCurrentUser } from '../../adapters'
import Theme from '../../img/Theme.svg'
import {
  StyledHeader, PageTitle, ThemeBttn,
  ActionContainer, ThemeGraphic
} from '../style/TitlebarStyles'
import UserBox from './userBox/UserBox'
import Main from './Main'
import Homepage from './Homepage'

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
      <StyledHeader>
        <PageTitle>The Bug Amelioration Routine</PageTitle>
        <ActionContainer>
          <ThemeBttn><ThemeGraphic onClick={flipTheme} src={Theme} alt='Theme Button Graphic' /></ThemeBttn>
          <UserBox user={user} checkLogin={checkLogin} />
        </ActionContainer>
      </StyledHeader>
      {user ? <MainStyles><Main /></MainStyles> : <MainStyles><Homepage /></MainStyles>}
    </>
  )
}
