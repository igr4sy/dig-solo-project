import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import { getLoginUser } from './api/user';
import Donation from './components/Donation';
import UserItem from './components/UserItem';
import CharacterSelect from './components/CharacterSelect';
import { getCharacters, updateExp } from './api/character';
import { getItemList, updateItemQuantity } from './api/userItem';
import { submitDonation } from './api/donation';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [itemList, setItemList] = useState([]);
  // const [selectedItem, setSelectedItem] = useState({});
  // const [quantity, setQuantity] = useState(0);

  const loginId = 1;

  useEffect(() => {
    getLoginUser(loginId).then((data) => {
      setUser(data);
    });

    getCharacters().then((data) => {
      setCharacters(data);
      setSelectedCharacter(data[0]);
    });

    getItemList(loginId).then((data) => {
      setItemList(data);
    });
  }, []);

  const fetchCharacter = () => {
    getCharacters().then((data) => setCharacters(data));
  };

  const fetchItemList = () => {
    getItemList(loginId).then((data) => {
      setItemList(data);
    });
  };

  const handleDonate = async (selectedItem, quantity) => {
    const res = await submitDonation(
      loginId,
      selectedCharacter.id,
      selectedItem,
      quantity
    );

    if (res) {
      const update = await updateExp(selectedCharacter.id, {
        exp: selectedItem.exp * quantity,
      });

      setSelectedCharacter(update);
      fetchCharacter();
      await updateItemQuantity(selectedItem, quantity);
      fetchItemList();
    }
  };

  return (
    <>
      <Character selectedCharacter={selectedCharacter} />
      <CharacterSelect
        characters={characters}
        setSelectedCharacter={setSelectedCharacter}
      />
      <h2>ユーザー名：{user.name}</h2>
      <UserItem itemList={itemList} handleDonate={handleDonate} />
      <Donation />
      <div>
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
