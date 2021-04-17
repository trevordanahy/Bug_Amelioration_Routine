import React from 'react'
import styled from 'styled-components'

const TitlebarContainer = styled.div`
  height: 100%;
  width: 100%;
  color: #DCD7CB;
  display: grid;
  grid-template-columns: 12% 88%;
  justify-items: center;
  align-items: center;

`
const Logo = styled.img`
  height: 50px;
  width: auto;
  align-self: center;
`
const PageTitle = styled.h1`
  color: #DCD7CB;
`

export default function Titlebar () {
  return (
    <>
      <TitlebarContainer>
        <Logo src='#' />
        <PageTitle>The Bug Amelioration Routine</PageTitle>
      </TitlebarContainer>
    </>
  )
}
