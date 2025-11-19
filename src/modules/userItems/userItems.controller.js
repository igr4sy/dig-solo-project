function createUserItemsController(service) {
  const list = async (req, res) => {
    const result = await service.list(Number(req.params.id));
    res.status(200).json({ data: result });
  };

  const update = async (req, res) => {
    const result = await service.update(Number(req.params.id), req.body);
    res.status(200).json({ data: result });
  };

  const remove = async (req, res) => {
    const result = await service.remove(Number(req.params.id));
    res.status(204).send();
  };

  return { list, update, remove };
}

module.exports = { createUserItemsController };
