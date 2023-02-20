const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const animeTitle = 'Hibike! Euphonium';
const animeId = 27989;
const mangaTitle = 'Kaguya-same: Love is War'
const mangaId = 90125;

// Logic Testing

test('Get a user\'s watch list', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.searchAnime(animeTitle);

  // console.log(data);
  expect(data.data[0].node.id).toBe(animeId);
});

test('Search for a queried manga title', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.searchManga(mangaTitle);

  expect(data.data[0].node.id).toBe(mangaId);
});

// Exception Testing

test('Invalid anime argument content', () => {
  const taki = new Taki(CLIENT_KEY);

  expect(taki.searchAnime('')).rejects.toThrow();
  expect(taki.searchManga('')).rejects.toThrow();
  // test for data type
});