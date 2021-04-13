import React, { useState, useRef } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

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
  max-height: auto;
  max-width: 50%;
  position: relative;
`

const FormSelect = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex: 1;
`

const FormBttn = styled.button`
  background-color: #752826;
  padding: 5px;
  color: #DCD7CB;
  border: #1E1E21;
  border-style: solid;
  `

const Form = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #DCD7CB;
  border-radius: 0px 0px 20px 20px;
  border: #1E1E21;
  border-style: solid;
`

export default function LoginModal ({ open, setOpen, checkUser }) {
  const backgroundRef = useRef()
  const [isLoginForm, setIsLoginForm] = useState(true)

  const switchToLogin = () => {
    setIsLoginForm(true)
  }

  const closeModal = e => {
    if (backgroundRef.current === e.target) {
      setOpen(false)
    }
  }
  if (!open) return null

  return ReactDom.createPortal(
    <div>
      <Background onClick={closeModal} ref={backgroundRef}>
        <Content>
          <FormSelect>
            <FormBttn onClick={() => setIsLoginForm(true)}>Login</FormBttn>
            <FormBttn onClick={() => setIsLoginForm(false)}>Register</FormBttn>
          </FormSelect>
          <Form>
            {isLoginForm
              ? (<LoginForm checkUser={checkUser} />)
              : (<RegForm checkUser={checkUser} switchToLogin={switchToLogin} />)}
          </Form>
        </Content>
      </Background>
    </div>,
    document.getElementById('portal')
  )
}
