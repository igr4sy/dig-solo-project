const { createDonationsRepository } = require('./donations.repository');
const { createDonationsService } = require('./donations.service');
const { createDonationsController } = require('./donations.controller');

function initDonations(knex) {
  const repository = createDonationsRepository(knex);
  const service = createDonationsService(repository);
  const controller = createDonationsController(service);

  return controller;
}

module.exports = { initDonations };
