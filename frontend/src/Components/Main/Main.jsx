import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  background: #DCD7CB;
  color: black;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
`

export default function Main ({ isLoggedIn, user }) {
  if (isLoggedIn === true) {
    return (<StyledMain><p>{user}</p></StyledMain>)
  }

  return (<StyledMain><p>Home World</p></StyledMain>)
}
