import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container id='login-form'>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Email Address</b></Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default LoginForm