function createUsersService(repository) {
  const find = async (idOrEmail) => {
    return await repository.findByIdOrEmail(idOrEmail);
  };

  const create = async (payload) => {
    return await repository.create(payload);
  };

  return { find, create };
}

module.exports = { createUsersService };
