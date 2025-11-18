import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import User from './components/User';
import { getLoginUser } from './api/user';
import Donation from './components/Donation';
import UserItem from './components/UserItem';
import CharacterSelect from './components/CharacterSelect';
import { getCharacters } from './api/character';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const loginId = 1;

  useEffect(() => {
    getLoginUser(loginId).then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
      setSelectedCharacter(data[0]);
    });
  }, []);

  return (
    <>
      <div className="card">
        <Character selectedCharacter={selectedCharacter} />
        <CharacterSelect
          characters={characters}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>
      <div>
        <User user={user} />
        <UserItem />
        <Donation />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
