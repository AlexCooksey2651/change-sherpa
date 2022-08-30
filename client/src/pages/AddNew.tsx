import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import NewHabitForm from '../components/habits/NewHabitForm';
import NewGoalForm from '../components/goals/NewGoalForm';

const AddNew = () => {
  const [form, setForm] = useState('habit')

  return (
    <Container id='add-new-form'>
      <Button onClick={() => setForm('habit')}>Add New Habit</Button>
      <Button onClick={() => setForm('goal')}>Add New Goal</Button>
      {(form === 'habit') ? <NewHabitForm /> : <NewGoalForm />}
    </Container>
  )
}

export default AddNew