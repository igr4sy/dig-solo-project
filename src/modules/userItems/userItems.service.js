function createUserItemsService(repository) {
  const list = async (id) => {
    return await repository.list(id);
  };

  const create = async (payload) => {
    return await repository.create(payload);
  };

  const update = async (id, payload) => {
    return await repository.update(id, payload);
  };

  const remove = async (id) => {
    return await repository.remove(id);
  };

  return { list, update, remove, create };
}

module.exports = { createUserItemsService };
