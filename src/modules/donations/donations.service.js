function createDonationsService(repository) {
  const create = async (payload) => {
    return await repository.create(payload);
  };

  return { create };
}

module.exports = { createDonationsService };
