import React from 'react'
import { Card, Button } from 'react-bootstrap';
import WeeklyCheckbox from './WeeklyCheckbox';

interface HabitProps {
  habit: {
    id: number;
    habit_description: string;
    number_days: number;
    priority: string;
    action_plan: string;
    obstacles: string;
    backup_plan: string;
    preparation_steps: string;
    is_active: boolean
  };
}

const HabitCard = ({habit}: HabitProps) => {
  // const {id, habit_description, is_active} = habit;

  return (
    <Card>
      <Card.Title>{habit.habit_description}</Card.Title>
      <Card.Text>Priority: {habit.priority}</Card.Text>
      <div>
        <p>Target: {habit.number_days} days per week</p>
        <p>Progress: 0/3</p>
        <p>Week of 8/28/2022</p>
        <WeeklyCheckbox habit={habit}/>
      </div>
      <Card.Text><b>Action Plan: </b>{habit.action_plan}</Card.Text>
      <Card.Text><b>Anticipated Obstacles: </b>{habit.obstacles}</Card.Text>
      <Card.Text><b>Backup Plan: </b>{habit.backup_plan}</Card.Text>
      <Card.Text><b>Preparation Steps: </b>{habit.preparation_steps}</Card.Text>     
      <Button>Edit Habit</Button>
      <Button>{habit.is_active ? "Mark Inactive" : "Reactivate"}</Button>
      <Button>Delete</Button>
      
    </Card>
  )
}

export default HabitCard