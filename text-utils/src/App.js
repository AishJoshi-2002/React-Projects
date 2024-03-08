import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
  if (mode === "light") {
    document.body.style.backgroundColor = '#ffe6e6'
  }
  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#808080'
    } else if (mode === "dark") {
      setMode("light")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} handleToggleMode={handleToggleMode} />
      <div className='container my-3'>
        <TextForm boxHeading="Enter the text to analyze" boxPlaceholder="Enter text here..." upperCase="Convert to Uppercase" lowerCase="Convert to Lowercase" extraSpace="Remove Extra Spaces" copy="Copy to Clipboard" clear="Clear" />
      </div>
      <About title="About" />
    </>
  );
}

export default App;
