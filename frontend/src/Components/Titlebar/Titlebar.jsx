import React from 'react'
import styled from 'styled-components'
import UserBox from './UserBox'

const TitlebarContainer = styled.div`
  height: 65px;
  width: 100vw;
  background: #752826;
  color: #DCD7CB;
  border-radius: 0px 0px 5px 5px;
  display: grid;
  grid-template-columns: 10% 82% 8%;
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

const UserDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
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
