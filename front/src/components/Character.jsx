import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/character';

function Character() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
      setSelectedCharacter(data[0]);
    });
  }, []);

  return (
    <>
      <div>
        <img src={selectedCharacter.image_url} alt="chara" />
      </div>
      <h1>
        {selectedCharacter.name} Lv: {selectedCharacter.level} Exp:{' '}
        {selectedCharacter.exp}
      </h1>
      <div>
        {characters.map((character, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedCharacter(characters[index]);
              }}
            >
              {character.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Character;
