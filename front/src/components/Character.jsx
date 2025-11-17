import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/character';

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const charas = getCharacters().then((data) => data);
    setCharacters(charas);
    console.log('charas', charas);
  }, []);

  return (
    <>
      <div>
        <img src="https://i.ibb.co/kVGzZyyh/penguin.png" alt="chara" />
      </div>
      <h1>{characters} Penguin Lv: 1 Exp: 0</h1>
    </>
  );
}

export default Character;
