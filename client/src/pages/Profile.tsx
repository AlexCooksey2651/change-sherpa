import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'


interface UserProps {
  name: string;
  email: string;
}

const Profile = (user: UserProps) => {
  return (
    <Container id="profile-container">
      <ListGroup variant="flush">
        <ListGroup.Item><b>Name:</b> {user.name}</ListGroup.Item>
        <ListGroup.Item><b>Email Address:</b> {user.email}</ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default Profile