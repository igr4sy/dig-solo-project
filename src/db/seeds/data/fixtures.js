const { faker } = require('@faker-js/faker');
function user() {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

function shared_character() {
  return [
    {
      name: 'ばぶ',
      image_url: 'https://i.ibb.co/rG0cFbYK/babu.png',
    },
    {
      name: 'わた',
      image_url: 'https://i.ibb.co/GQghyB8Q/wata.png',
    },
    {
      name: 'きのこ',
      image_url: 'https://i.ibb.co/G49M81V0/kinoko.png',
    },
  ];
}
module.exports = { user, shared_character };
