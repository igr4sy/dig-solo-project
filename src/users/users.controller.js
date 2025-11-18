function createUsersController(service) {
  const find = async (req, res) => {
    const result = await service.find(Number(req.params.id));
    res.status(200).json({ data: result });
  };

  return { find };
}

module.exports = { createUsersController };
