import React from 'react';

import './AddPerson.component.css';

const AddPerson = (props) => (
  <div className='AddPerson'>
    <button onClick={props.personAdded}>Add Person</button>
  </div>
);

export default AddPerson;
