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
      exp: 200,
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

function items() {
  return [
    {
      name: 'ごはん',
      exp: 100,
    },
    {
      name: 'ジュース',
      exp: 20,
    },
    {
      name: '本',
      exp: 50,
    },
  ];
}

function user_items() {
  return [
    {
      user_id: 1,
      item_id: 1,
      stock: 5,
    },
    {
      user_id: 1,
      item_id: 2,
      stock: 2,
    },
    {
      user_id: 2,
      item_id: 2,
      stock: 3,
    },
    {
      user_id: 3,
      item_id: 3,
      stock: 2,
    },
  ];
}

function breeds() {
  return [
    {
      user_id: 1,
      character_id: 1,
      exp: 200,
    },
  ];
}
module.exports = { user, shared_character, items, user_items, breeds };
