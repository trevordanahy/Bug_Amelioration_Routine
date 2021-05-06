import React from 'react'
import StyledMain from '../style/MainStyles'
import BugLog from './BugLog/BugLog'

export default function Main ({ user }) {
  if (user) {
    return (
      <>
        <BugLog />
      </>
    )
  }

  return (<StyledMain>Home World</StyledMain>)
}
