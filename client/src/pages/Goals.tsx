import React from 'react'

const Goals = () => {
  const goals = [];

  return (
    <div>
      {(goals.length > 0) ? 
      <p>hello</p> : 
      <p>You haven't set any goals</p>}
    </div>
  )
}

export default Goals