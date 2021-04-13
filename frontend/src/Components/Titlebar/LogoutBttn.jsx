import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 80%;
  color: #DCD7CB;
  background: #1E1E21;
`

export default function LogoutBttn ({ checkUser }) {
  const url = 'http://localhost:8000/user/logout'

  async function Logout () {
    const res = await fetch(url, { credentials: 'include' })
    const result = await res.json()
    console.log(result)

    checkUser()
  }

  return (
    <Button onClick={Logout}>Logout</Button>
  )
}
