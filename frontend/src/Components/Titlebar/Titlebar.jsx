import React from 'react'
import styled from 'styled-components'
import UserBox from './UserBox'

const TitlebarContainer = styled.div`
  height: 85px;
  width: 100vw;
  background: #752826;
  color: #DCD7CB;
  display: grid;
  grid-template-columns: 10% 74% 16%;
  justify-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: auto;
`
const PageTitle = styled.h1`
  color: #DCD7CB;
`

const UserDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export default function Titlebar () {
  return (
    <>
      <TitlebarContainer>
        <Logo src='#' />
        <PageTitle>Bug Amelioration Routine</PageTitle>
        <UserDiv>
          <UserBox />
        </UserDiv>
      </TitlebarContainer>
    </>
  )
}
