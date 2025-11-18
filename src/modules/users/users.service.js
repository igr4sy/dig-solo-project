function createUsersService(repository) {
  const find = async (id) => {
    return await repository.findById(id);
  };

  return { find };
}

module.exports = { createUsersService };
