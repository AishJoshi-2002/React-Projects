import './App.css';

let day1_1 = 'Introduction to react';
let day1_2 = 'JS Refresher';
let day2_1  = 'Understanding JSX';
let day2_2 = 'Setup + Adding Bootstrap to React';

function App() {
  return (
    <>
      <div className='first'>My first React app</div>
      <nav>
        <li>(24/02/2024): {day1_1} and {day1_2}</li>
        <li>(25/02/2024): {day2_1} and {day2_2} </li>
      </nav>
    </>
  );
}

export default App;
