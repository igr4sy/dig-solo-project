function createUserItemsService(repository) {
  const list = async (id) => {
    return await repository.list(id);
  };

  const update = async (id, payload) => {
    return await repository.update(id, payload);
  };

  const remove = async (id) => {
    return await repository.remove(id);
  };

  return { list, update, remove };
}

module.exports = { createUserItemsService };
