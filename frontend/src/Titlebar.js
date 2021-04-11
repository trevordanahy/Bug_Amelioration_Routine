import React from 'react'
import User from './User'

export default function Titlebar () {
  return (
    <>
      <div className='titlebar'>
        <h1 id='pagetitle'>Bug Journal</h1>
        <User />
      </div>

    </>
  )
}
