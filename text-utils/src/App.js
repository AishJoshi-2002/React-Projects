import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light")
  if (mode === "light") {
    document.body.style.backgroundColor = '#ffe6e6'
  }
  const [alert, setAlert] = useState(null)
  const handleAlerts = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#808080'
      handleAlerts("Dark mode is enabled", "dark")
    } else if (mode === "dark") {
      setMode("light")
      handleAlerts("Light mode is enabled", "primary")
    }
  }

  return (
    <Router>
      <>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} handleToggleMode={handleToggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path='/'>
              <TextForm boxHeading="Enter the text to analyze" boxPlaceholder="Enter text here..." upperCase="Convert to Uppercase" lowerCase="Convert to Lowercase" extraSpace="Remove Extra Spaces" copy="Copy to Clipboard" clear="Clear" />
            </Route>
            <Route path='/about'>
              <About title="About" />
            </Route>
          </Routes>
        </div>
      </>
    </Router >
  );
}

export default App;
