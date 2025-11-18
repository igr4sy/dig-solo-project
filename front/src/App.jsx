import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import User from './components/User';
import { getLoginUser } from './api/user';
import Donation from './components/Donation';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});

  const loginId = 1;

  useEffect(() => {
    getLoginUser(loginId).then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      <Character />
      <User user={user} />
      <Donation />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
