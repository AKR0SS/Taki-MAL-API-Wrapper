const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const animeId = 5114;
const mangaID = 2;

test('Retrieves the anime rankings', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getAnimeRanking();

  expect(data.data[0].node.id).toBe(animeId);
});

test('Retrieves the manga rankings', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getMangaRanking();

  expect(data.data[0].node.id).toBe(mangaID);
});