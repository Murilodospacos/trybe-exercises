import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [randomNumber] = useState(0);

  useEffect(() => {
    setInterval(Math.floor(Math.random() * 101) + randomNumber,3000)
  })

  return (
    <div className="App">
      <span>{randomNumber}</span>
    </div>
  );
}

export default App;
