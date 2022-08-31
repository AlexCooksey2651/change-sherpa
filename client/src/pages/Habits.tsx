import React from 'react'
import WeeklyCheckbox from '../components/habits/WeeklyCheckbox';

const Habits = () => {
  const habits = [];
  if (habits.length < 1) return (
    <div>
      <p>You haven't set any habits</p>
      <WeeklyCheckbox />
    </div>
  )
  return (
    <div>
      {(habits.length > 0) ? 
      <p>hello</p> : 
      <p>You haven't set any habits</p>}
    </div>
  )
}

export default Habits