import React from 'react'
import DayButton from './DayButton'

let days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const WeeklyCheckbox = () => {
  const buttons = days.map(day => {
    return <DayButton key={day} day={day}/> 
  })
  return (
    <div className="weekday-buttons">
      {buttons}
    </div>
  )
}

export default WeeklyCheckbox