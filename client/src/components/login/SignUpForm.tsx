import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <Container id='signup-form'>
      <h1>Sign Up Here</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Name</b></Form.Label>
          <Form.Control type="text" placeholder="Enter Your Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Email Address</b></Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Confirm Password</b></Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button type="submit">Finish Signing Up</Button>
      </Form>
    </Container>
  )
}

export default SignUpForm