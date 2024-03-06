import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About" />
      <div className='container my-3'>
        <TextForm boxHeading="Enter the text to analyze" boxPlaceholder="Enter text here..." upperCase="Convert to Uppercase" lowerCase="Convert to Lowercase" extraSpace="Remove Extra Spaces" copy="Copy to Clipboard" clear="Clear"/>
      </div>
      <About title="About"/>
    </>
  );
}

export default App;
