import React from 'react'
import { Container, Logo, PageTitle } from '../style/TitlebarStyles'

export default function Titlebar () {
  return (
    <>
      <Container>
        <Logo src='#' alt='Site Logo' />
        <PageTitle>The Bug Amelioration Routine</PageTitle>
      </Container>
    </>
  )
}
