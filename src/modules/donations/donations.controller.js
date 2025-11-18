function createDonationsController(service) {
  const create = async (req, res) => {
    const result = await service.create(req.body);
    res.status(201).json({ data: result });
  };

  return { create };
}

module.exports = { createDonationsController };
