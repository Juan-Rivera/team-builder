import React from 'react'

function TeamMember({ details }) {
  return (
    <div className='teamMember container'>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}

export default TeamMember
