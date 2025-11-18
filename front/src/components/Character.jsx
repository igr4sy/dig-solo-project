function Character({ selectedCharacter }) {
  return (
    <>
      <img
        className="chara-image"
        src={selectedCharacter.image_url}
        alt="chara"
      />
      <div>
        <h1>{selectedCharacter.name}</h1>
        <h2>
          Lv: {selectedCharacter.level} / Exp: {selectedCharacter.exp}
        </h2>
      </div>
    </>
  );
}

export default Character;
