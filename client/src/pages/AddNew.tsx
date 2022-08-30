import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import NewHabitForm from '../components/habits/NewHabitForm';
import NewGoalForm from '../components/goals/NewGoalForm';

const AddNew = () => {
  const [form, setForm] = useState('habit')

  return (
    <Container id='add-new-form' className="text-align-center">
      <div id='form-buttons'>
        <Button variant="success" id='add-habit-btn' onClick={() => setForm('habit')}>Add New Habit</Button>
        <Button variant="success" id='add-goal-btn' onClick={() => setForm('goal')}>Add New Goal</Button>
      </div>
      {(form === 'habit') ? <NewHabitForm /> : <NewGoalForm />}
    </Container>
  )
}

export default AddNew