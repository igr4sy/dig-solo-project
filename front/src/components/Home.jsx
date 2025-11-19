import auth from '../firebase';
import { useNavigate } from 'react-router-dom';

import Character from './Character';
import { getLoginUser } from '../api/user';
import Donation from './Donation';
import UserItem from './UserItem';
import CharacterSelect from './CharacterSelect';
import { getCharacters, updateExp } from '../api/character';
import { getItemList, updateItemQuantity } from '../api/userItem';
import { submitDonation } from '../api/donation';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  const [user, setUser] = useState({});
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [itemList, setItemList] = useState([]);

  const loginId = 1;

  const { authUser } = useAuthContext();

  useEffect(() => {
    getLoginUser(authUser.email).then((data) => {
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

  const navigation = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigation('/login');
  };

  return (
    <div>
      <h1>マイページ</h1>
      <Character selectedCharacter={selectedCharacter} />
      <CharacterSelect
        characters={characters}
        setSelectedCharacter={setSelectedCharacter}
      />
      <h2>ユーザー名：{user.name}</h2>
      <UserItem itemList={itemList} handleDonate={handleDonate} />
      <Donation />
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
