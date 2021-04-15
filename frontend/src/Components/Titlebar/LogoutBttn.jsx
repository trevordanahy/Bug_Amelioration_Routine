import React from 'react'
import styled from 'styled-components'

const axios = require('axios')

const Button = styled.button`
  width: 80%;
  color: #DCD7CB;
  background: #1E1E21;
`

export default function LogoutBttn ({ checkUser }) {
  const url = 'http://localhost:8000/user/logout'

  async function Logout () {
    const res = await axios.get(url, { withCredentials: true })
      .catch((err) => console.log(err))

    checkUser()
  }

  return (
    <Button onClick={Logout}>Logout</Button>
  )
}
