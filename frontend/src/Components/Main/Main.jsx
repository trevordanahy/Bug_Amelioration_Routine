import React from 'react'
import styled from 'styled-components'
import BugLog from './BugLog'

const StyledMain = styled.main`
  background: #DCD7CB;
  color: black;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 60% 40%;
`

export default function Main ({ isLoggedIn, user }) {
  if (isLoggedIn === true) {
    return (<StyledMain><BugLog /></StyledMain>)
  }

  return (<StyledMain><p>Home World</p></StyledMain>)
}
