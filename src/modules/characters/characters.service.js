function createCharactersService(repository) {
  const list = async () => {
    return await repository.list();
  };

  const update = async (id, payload) => {
    return await repository.update(id, payload);
  };
  return { list, update };
}

module.exports = { createCharactersService };
