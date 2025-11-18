function createUserItemsController(service) {
  const userItemsList = async (req, res) => {
    const result = await service.userItemsList(Number(req.params.id));
    res.status(200).json({ data: result });
  };

  return { userItemsList };
}

module.exports = { createUserItemsController };
