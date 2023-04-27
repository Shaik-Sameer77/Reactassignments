import React, { useState } from 'react';
import Heading from './component/Heading';
import NameForm from './component/NameForm';
import './App.css';

function App() {
  const [name, setName] = useState('****');

  return (
    <div className="container">
      <Heading name={name} />
      <NameForm setName={setName} />
    </div>
  );
}

export default App;

