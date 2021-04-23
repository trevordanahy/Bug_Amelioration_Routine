import React, { useState, useRef } from 'react'
import ReactDom from 'react-dom'
import { Background, Content, FormSelect, FormBttn, Form } from '../../style/userBox/AuthModalStyle'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

export default function LoginModal ({ isOpen, setIsOpen }) {
  const backgroundRef = useRef()
  const [isLoginForm, setIsLoginForm] = useState(true)

  const switchToLogin = () => {
    setIsLoginForm(true)
  }

  const closeModal = e => {
    if (backgroundRef.current === e.target) {
      setIsOpen(false)
    }
  }
  if (!isOpen) return null

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
              ? (<LoginForm />)
              : (<RegistrationForm switchToLogin={switchToLogin} />)}
          </Form>
        </Content>
      </Background>
    </div>,
    document.getElementById('modalPortal')
  )
}
