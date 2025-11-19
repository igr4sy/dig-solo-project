function createUsersService(repository) {
  const find = async (idOrEmail) => {
    return await repository.findByIdOrEmail(idOrEmail);
  };

  return { find };
}

module.exports = { createUsersService };
