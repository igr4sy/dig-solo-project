import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/character';

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <div>
        <img src="https://i.ibb.co/kVGzZyyh/penguin.png" alt="chara" />
      </div>
      <h1>Penguin Lv: 1 Exp: 0</h1>
      <div>
        <ul>
          {characters.map((character, index) => {
            return <li key={index}>{character.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Character;
