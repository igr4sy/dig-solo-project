import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import User from './components/User';
import { getLoginUser } from './api/user';

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({});

  useEffect(() => {
    getLoginUser(1).then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      <Character />
      <User user={user} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
