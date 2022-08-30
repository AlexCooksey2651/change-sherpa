import React, { useState } from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap'

const NewHabitForm = () => {
  const [habitDescription, setHabitDescription] = useState('');
  const [numberDays, setNumberDays] = useState('');
  const [habitPriority, setHabitPriority] = useState('');
  const [actionPlan, setActionPlan] = useState('');
  const [obstacles, setObstacles] = useState('');
  const [backupPlan, setBackupPlan] = useState('');
  const [prepSteps, setPrepSteps] = useState('');


  return (
    <Container>
      <Form id='new-habit-form'>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Habit Description</b></Form.Label>
          <Form.Control type="text" placeholder="Describe the Specific Habit You'd Like to Do" value={habitDescription} onChange={e => setHabitDescription(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>How Many Days Per Week</b></Form.Label>
          <Form.Select aria-label="Default select example" value={numberDays} onChange={e => setNumberDays(e.target.value)}>
            <option value='' disabled selected>Select</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Priority</b></Form.Label>
          <Form.Select aria-label="Default select example" value={habitPriority} onChange={e => setHabitPriority(e.target.value)}>
            <option value='' disabled selected>Select</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput" >
          <Form.Label><b>Action Plan</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Get Specific! What tools will you use to remember or track? What time of day will you do it? Will you do it together with anyone?" value={actionPlan} onChange={e => setActionPlan(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput" >
          <Form.Label><b>What Obstacles Could Come Up?</b></Form.Label>
          <Form.Control type="text" placeholder="What could come up that will make it challenging to stick to your new habit?" value={obstacles} onChange={e => setObstacles(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Backup Plan</b></Form.Label>
          <Form.Control type="text" placeholder="What is your backup plan if you can't do your normal habit routine?" value={backupPlan} onChange={e => setBackupPlan(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label><b>Preparation Steps</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="What do you need to do to prepare? Are there any skills you need to learn? Do you need to purchase anything or seek out any resources?" value={prepSteps} onChange={e => setPrepSteps(e.target.value)}/>
        </Form.Group>

        <Button id="submit-new-habit-btn" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default NewHabitForm