import React, { useState } from 'react'
import styled from 'styled-components'
import User from './User'

const TitlebarContainer = styled.div`
  height: 65px;
  width: 100vw;
  background: #752826;
  color: #DCD7CB;
  display: grid;
  grid-template-columns: 10% 74% 16%;
  justify-items: center;
`

export default function Titlebar() {
  return (
    <>
      <TitlebarContainer>
        <img src='#' />
        <h1 id='pagetitle'>Bug Journal</h1>
        <User />
      </TitlebarContainer>

    </>
  )
}
