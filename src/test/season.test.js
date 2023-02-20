const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const ID = 28957;

// Logic Testing

test('Seasonal anime data', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getSeason('spring', 2015);

  expect(data.data[0].node.id).toBe(ID);
});