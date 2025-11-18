function createCharactersController(service) {
  const list = async (req, res) => {
    // const limit = req.query.limit ? Number(req.query.limit) : undefined;

    const result = await service.list();

    res.status(200).json({ data: result });
  };

  const update = async (req, res) => {
    const result = await service.update(Number(req.params.id), req.body);
    res.status(200).json({ data: result });
  };

  return { list, update };
}

module.exports = { createCharactersController };
