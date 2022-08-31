import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

interface DayButtonProps {
    day: string;
}

const DayButton = ({ day }: DayButtonProps) => {
  const [completed, setCompleted] = useState(false)
  
  return (
    <Button className={completed ? "complete-day-btn" : "incomplete-day-btn"} onClick={() => setCompleted(!completed)}>{day[0]}</Button>
  )
}

export default DayButton