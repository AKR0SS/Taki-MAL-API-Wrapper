const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const USER = 'xAKROSSx';
const EMPTY_USER = 'emptyaccountlist';
const animeID = 6408;
const mangaID = 45275;

// Logic Testing

test('Get a user\'s watch list', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getWatchList(USER);

  expect(data.data[0].node.id).toBe(animeID);
});

test('get a user\'s read list', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getReadList(USER);

  expect(data.data[2].node.id).toBe(mangaID);
});

// Exception Testing

test('invalid argument', () => {
  const taki = new Taki(CLIENT_KEY);

  expect(taki.getWatchList('')).rejects.toThrow();
  expect(taki.getWatchList(123)).rejects.toThrow();

  expect(taki.getReadList('')).rejects.toThrow();
  expect(taki.getReadList(123)).rejects.toThrow();
});