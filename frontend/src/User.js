import React, { useState, useEffect } from 'react'
import LoginForm from './LoginForm'

const url = 'http://localhost:8000/user/me'

export default function User () {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')

  const checkUser = async () => {
    const res = await fetch(url, { credentials: 'include' })
    const userData = await res.json()
    setUser(userData.username)
    setLoading(false)
  }

  useEffect(() => {
    checkUser()
  }, [])

  if (loading) {
    return (<h3>...</h3>)
  } else if (!user) {
    return (<LoginForm checkUser={checkUser} />)
  }

  return (
    <div>
      <h3>{user}</h3>
    </div>
  )
}
