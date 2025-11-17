const { faker } = require('@faker-js/faker');
function user() {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

function shared_character() {
  return {
    name: faker.animal.type(),
  };
}
module.exports = { user, shared_character };
