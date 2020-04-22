import React from 'react'

function TMForm(props) {
    // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!
    const {
      values,
      onInputChange,
      onSubmit,
    } = props
  
    return (
      <form className='teamForm container'>
        <h2>Team Build Form</h2>
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name:&nbsp;
        <input

            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          /></label>

        <label>Email:&nbsp;
        <input
           
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          /></label>
  
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
        <select
  
            value={values.role}
            onChange={onInputChange}
            name='role'
          >
              {/* all the roles*/}
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
            <option value='Other'>Other</option>
          </select></label>
  
        {/* submits the form*/}
        <button onClick={onSubmit}>submit</button>
      </form>
    )
  }
  
  export default TMForm
  