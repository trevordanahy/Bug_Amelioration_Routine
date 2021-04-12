import React, { useState, useRef } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: #DCD7CB;
    padding: 20px;
    border-radius: 20px;
    max-height: 50%;
    max-width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function LoginModal ({ open, checkUser, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <div>
      <Background>
        <Content>
          <LoginForm checkUser={checkUser} />
        </Content>
      </Background>
    </div>,
    document.getElementById('portal')
  )
}
