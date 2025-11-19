function createUsersController(service) {
  const find = async (req, res) => {
    const result = await service.find(req.params.idOrEmail);
    res.status(200).json({ data: result });
  };

  return { find };
}

module.exports = { createUsersController };
