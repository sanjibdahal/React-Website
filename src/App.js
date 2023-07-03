import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state,setState] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`You clicked ${state} times.`}
        </p>
        <button onClick={()=>setState(state+1)}>Increase</button>
        <button onClick={()=>setState(state-1)}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
