import React from 'react'
import styled from 'styled-components'

const axios = require('axios')

const Button = styled.button`
  width: 80%;
  color: #DCD7CB;
  background: #1E1E21;
`

export default function LogoutBttn ({ checkLogin }) {
  const url = 'http://localhost:8000/user/logout'

  async function Logout () {
    axios.get(url, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          checkLogin()
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Button onClick={Logout}>Logout</Button>
  )
}
