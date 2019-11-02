import React, { useState } from 'react';
import Form from './components/Form';
import Posts from './components/Posts';
import DarkMode from './components/Darkmode';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'darkMode' : null}>
        <Form />
        <Posts />
      </div>
    </DarkMode.Provider>
  );
}

export default App;
