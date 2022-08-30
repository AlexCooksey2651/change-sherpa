import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

const LoginPage = () => {
  const [loginPage, setLoginPage] = useState(true);

  function toggleLoginPage() {
    setLoginPage(!loginPage)
  }

  return (
    <Container>
      {loginPage ? <LoginForm /> : <SignUpForm />}
      <Button id='toggle-login-btn' onClick={toggleLoginPage}>
        {loginPage ? 'Sign Up' : 'Return to Login'}
      </Button>
    </Container>
  )
}

export default LoginPage