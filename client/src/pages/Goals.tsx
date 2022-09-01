import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import GoalCard from '../components/goals/GoalCard';

const Goals = () => {
  const goals = [{id: 1, goal_description: "I want to lose weight", completed: true}];
  
  const activeGoals = goals.filter(goal => goal.completed === false)
  const activeGoalCards = activeGoals.map(goal => <GoalCard key={goal.id} goal={goal} />)

  const completedGoals = goals.filter(goal => goal.completed === true)
  const completedGoalCards = completedGoals.map(goal => <GoalCard key={goal.id} goal={goal} />)

  return (
    <div id="goal-card-page">
      <Container id="active-goal-cards">
        <h1>Current</h1>
        {activeGoalCards.length > 0 ? activeGoalCards : <p>You don't have any current goals</p>}
      </Container>
      <Container id="inactive-habit-cards">
        <h1>Previously Completed Goals</h1>
        {completedGoalCards.length > 0 ? completedGoalCards : <p>You don't have any completed goals</p>}
      </Container>
    </div>
  )
}

export default Goals