import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handlePrompt = () => {
    const enteredName = window.prompt('Please enter your name:');
    if (enteredName) {
      setName(enteredName);
    }
  };

  return (
    <div>
      <h1>Hello, {name || 'Guest'}!</h1>
      <button onClick={handlePrompt}>Enter Name</button>
    </div>
  );
}

export default App;
