import React, { useState } from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap'

const NewGoalForm = () => {
  const [goalDescription, setGoalDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('');
  const [goalPriority, setGoalPriority] = useState('');
  const [why, setWhy] = useState('');
  const [measure, setMeasure] = useState('');
  const [behaviors, setBehaviors] = useState('');
  const [challenges, setChallenges] = useState('');
  const [resources, setResources] = useState('');
  


  return (
    <Container>
      <Form id='new-habit-form'>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Goal Description</b></Form.Label>
          <Form.Control type="text" placeholder="Describe your goal. Try to make it as specific as possible." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Deadliine</b></Form.Label>
          {/* validate this can't be in the past */}
          <Form.Control type="date" placeholder='Select Date'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Category</b></Form.Label>
          <Form.Select aria-label="Default select example">
            <option value='' disabled selected>Select</option>
            <option value='career'>Career</option>
            <option value='education/learning'>Education/Learning</option>
            <option value='financial'>Financial</option>
            <option value='health/fitness'>Health/Fitness</option>
            <option value='hobby'>Hobby</option>
            <option value='personal development'>Personal Development</option>
            <option value='relationship'>Relationship</option>
            <option value='other'>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Priority</b></Form.Label>
          <Form.Select aria-label="Default select example">
            <option value='' disabled selected>Select</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Why is it Important?</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Why is this goal important to you? What do you hope will be different about your life? Is there a more important, underlying goal?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>How Will You Measure Progress?</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="How can you measure and quanitify progress in an objective way? How will you know when the goal has been accomplished?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>
            <b>What Changes Could You Make to Help You Accomplish this Goal?</b>
          </Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="What behaviors or habits would help you reach your goal? Anything that would be helpful to reduce or eliminate?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>What Challenges Do You Face?</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="What could come up that will make it more difficult to accomplish your goal? What is under your control to change?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>What Resources Could Help?</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Think about any people, tools, or other resources that could make it easier to reach your goal. What can help you stay motivated and encourage accountability?" />
        </Form.Group>

        <Button id="submit-new-goal-btn" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default NewGoalForm