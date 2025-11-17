import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <>
      <Character />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Message from the backend: {message}</p>
    </>
  );
}

export default App;
