import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'
import LogoutBttn from './LogoutBttn'

const LoginBttn = styled.button`
  height: 30px;
  background-color: #1E1E21;
  color: #DCD7CB;
  font-weight: bold;
  border-radius: 15px;
  flex-grow: .5;
  right: 20px;
`

const DisplayUser = styled.h3`
  color: #DCD7CB;
`

export default function UserBox () {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const launchModal = () => {
    setIsOpen(true)
  }

  const checkUser = async () => {
    const url = 'http://localhost:8000/user/me'
    const res = await fetch(url, { credentials: 'include' })
      .then((res) => {
        if (res.status === 401) {
          setLoading(false)
          return res
        }
        return res
      })
      .catch((err) => console.log(err))

    const res_json = await res.json()
      .then((res_json) => {
        setUser(res_json.username)
        setLoading(false)
      }).catch((err) => console.log(err))
  }

  useEffect(() => {
    checkUser()
  }, [])

  if (loading) {
    return (<h3>...</h3>)
  } else if (!user) {
    return (
      <>
        <LoginBttn onClick={launchModal}>Login</LoginBttn>
        <LoginModal open={isOpen} setOpen={setIsOpen} checkUser={checkUser} />
      </>
    )
  }
  return (
    <>
      <DisplayUser>{user}</DisplayUser>
      <LogoutBttn checkUser={checkUser} />
    </>
  )
}
