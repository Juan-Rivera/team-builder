import React, { useState } from 'react';
import './App.css';

import TeamMember from './TeamMember';
import TMForm from './TMForm';

const initialTeamList = [
  // 👉 the shape of the actual friend object from API
  {
    
    name: 'Name Test',
    email: 'test@test.com',
    role: 'Backend Engineer',
  },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
    //puling the name of the input
    const name = evt.target.name
    //pulling the value of the input
    const value = evt.target.value
    setFormValues({...formValues, [name]: value},)
  }

  const onSubmit = evt => {
    //prevents page from reloading when submitted
    evt.preventDefault();

    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role 
    }
    //updates list of Team Members with new Team Member
    setTeamMembers([...teamMembers, newTeamMember])
    //clears the form after submitting
    setFormValues(initialFormValues)
  }
  return (
    <div className='team container'>
     <header><h1>Team Build List</h1></header>
      {
        //Returns the whole list of teamMembers with all of the details of each Team Member
        teamMembers.map(tm => {
          return (
            <TeamMember details={tm} />
          )
        })
      }
      {/* the FORM*/}
      <TMForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        />

    </div>
  );
}

export default App;
