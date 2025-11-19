function createUserItemsController(service) {
  const list = async (req, res) => {
    const result = await service.list(Number(req.params.id));
    res.status(200).json({ data: result });
  };

  const update = async (req, res) => {
    const result = await service.update(Number(req.params.id), req.body);
    res.status(200).json({ data: result });
  };

  return { list, update };
}

module.exports = { createUserItemsController };
