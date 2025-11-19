function createUsersController(service) {
  const find = async (req, res) => {
    const result = await service.find(req.params.idOrEmail);
    res.status(200).json({ data: result });
  };

  const create = async (req, res) => {
    const result = await service.create(req.body);
    res.status(201).json({ data: result });
  };

  return { find, create };
}

module.exports = { createUsersController };
