import React from 'react'
import { Container, Logo, PageTitle } from '../style/TitlebarStyles'
import logo from '../../img/BugLogo.svg'

export default function Titlebar () {
  return (
    <>
      <Container>
        <Logo src={logo} alt='Site Logo' />
        <PageTitle>The Bug Amelioration Routine</PageTitle>
      </Container>
    </>
  )
}
