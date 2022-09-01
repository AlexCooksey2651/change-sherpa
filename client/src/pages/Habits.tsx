import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import HabitCard from '../components/habits/HabitCard';

const Habits = () => {
  const habits = [{id: 1, habit_description: "I want to eat more vegetables", is_active: true}];
  
  const activeHabits = habits.filter(habit => habit.is_active === true)
  const activeHabitCards = activeHabits.map(habit => <HabitCard key={habit.id} habit={habit} />)

  const inactiveHabits = habits.filter(habit => habit.is_active === false)
  const inactiveHabitCards = inactiveHabits.map(habit => <HabitCard key={habit.id} habit={habit} />)

  return (
    <div id="habit-card-page">
      <Container id="active-habit-cards">
        <h1>Active Habits</h1>
        {activeHabitCards.length > 0 ? activeHabitCards : <p>You don't have any active habits</p>}
      </Container>
      <Container id="inactive-habit-cards">
        <h1>Inactive Habits</h1>
        {inactiveHabitCards.length > 0 ? inactiveHabitCards : <p>You don't have any inactive habits</p>}
      </Container>
    </div>
  )
}

export default Habits