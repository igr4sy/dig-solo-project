function CharacterSelect({ characters, setSelectedCharacter }) {
  return (
    <>
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
    </>
  );
}

export default CharacterSelect;
