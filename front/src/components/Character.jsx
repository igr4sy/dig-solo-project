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
    <div className="card">
      <div>
        <img
          className="chara-image"
          src={selectedCharacter.image_url}
          alt="chara"
        />
      </div>
      <div className="chara-info">
        <h1>
          {selectedCharacter.name} Lv: {selectedCharacter.level} Exp:{' '}
          {selectedCharacter.exp}
        </h1>
      </div>
      <p>キャラクターセレクト</p>
      <div>
        {characters.map((character, index) => {
          return (
            <button
              className="chara-button"
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
    </div>
  );
}

export default Character;
