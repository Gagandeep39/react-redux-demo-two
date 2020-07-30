import React, { useState } from 'react';

import './AddPerson.component.css';

const AddPerson = (props) => {
  const [nameState, setNameState] = useState('');
  const [ageState, setAgeState] = useState('');

  const nameChangeHandler = (event) => {
    setNameState(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeState(event.target.value);
  };

  return (
    <div className='AddPerson'>
      {/* <input name='name' type='text' placeholder='Name' onChange={(event)=>nameChangeHandler(event)}/> */}
      <input
        name='name'
        type='text'
        placeholder='Name'
        onChange={nameChangeHandler}
        value={nameState}
      />
      <input
        name='age'
        type='number'
        placeholder='Age'
        onChange={ageChangeHandler}
        value={ageState}
      />
      <button onClick={() => props.personAdded(nameState, ageState)}>
        Add Person
      </button>
    </div>
  );
};

export default AddPerson;
