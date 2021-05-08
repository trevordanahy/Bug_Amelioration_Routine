import React from 'react'
import StyledMain from '../style/MainStyles'
import BugLog from './BugLog/BugLog'
import Editor from './BugEditor/Editor'

export default function Main ({ user }) {
  if (user) {
    return (
      <>
        <BugLog />
        <Editor />
      </>
    )
  }

  return (<StyledMain>Home World</StyledMain>)
}
