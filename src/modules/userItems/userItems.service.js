function createUserItemsService(repository) {
  const userItemsList = async (id) => {
    return await repository.userItemsList(id);
  };

  return { userItemsList };
}

module.exports = { createUserItemsService };
