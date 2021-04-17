import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Titlebar from './Components/Titlebar'
import UserBox from './Components/UserBox/UserBox'
import Main from './Components/Main/Main'

const axios = require('axios')

const StyledHeader = styled.header`
  height: 65px;
  width: 100vw;
  background: #752826;
  color: #DCD7CB;
  border-radius: 0px 0px 0px 5px;
  border-bottom: 3px solid black;
  display: grid;
  grid-template-columns: 92% 8%;
  justify-items: center;
  align-items: center;
`

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const meUrl = 'http://localhost:8000/user/me'

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = async () => {
    axios.get(meUrl, { withCredentials: true })
      .then((res) => {
        setIsLoggedIn(true)
        setUser(res.data.username)
      })
      .catch((err) => {
        console.log(err.response)
        if (err.response.status === 401) {
          setUser('')
          setIsLoggedIn(false)
        } else { console.log(err) }
      })
  }

  return (
    <>
      <StyledHeader>
        <Titlebar />
        <UserBox checkLogin={checkLogin} user={user} />
      </StyledHeader>
      <Main isLoggedIn={isLoggedIn} user={user} />
    </>
  )
}

export default App
