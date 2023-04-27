import React, { useState } from 'react';
import './NameForm.css';

function NameForm(props) {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setName(newName);
    setNewName('');
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="label">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newName}
        onChange={handleChange}
        className="input"
        required
      />
      <button type="submit" className="button">Submit</button>
    </form>
  );
}

export default NameForm;

