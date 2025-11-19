function createUserItemsService(repository) {
  const list = async (id) => {
    return await repository.list(id);
  };

  const update = async (id, payload) => {
    return await repository.update(id, payload);
  };

  return { list, update };
}

module.exports = { createUserItemsService };
