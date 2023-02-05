const { setClientKey, getSeason } = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const season = 'spring';
const year = 2015;
const animeId = 31096;

// Exception Testing

test('rejects an invalid year', () => {
  expect(getSeason(season, '2015')).rejects.toThrow('[TAKI] Invalid Year');
  expect(getSeason(season, '')).rejects.toThrow('[TAKI] Invalid Year');
});

test('rejects an invad season', () => {
  expect(getSeason(1, year)).rejects.toThrow('[TAKI] Invalid Season');
  expect(getSeason('', year)).rejects.toThrow('[TAKI] Invalid Season');
});

test('rejects null client key', () => {
  const obj = {};

  expect(getSeason(season, year)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(getSeason.next(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(getSeason.previous(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
});

test('rejects invalid paging data', () => {
  expect(getSeason.next('')).rejects.toThrow('[TAKI] Invalid Data');
  expect(getSeason.previous('')).rejects.toThrow('[TAKI] Invalid Data');
});

test('rejects invalid pagination', async () => {
  setClientKey(CLIENT_KEY);
  const anime = await getSeason('spring', 1960);

  expect(getSeason.next(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
  expect(getSeason.previous(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
});

// Logic Testing

test('Get Seasonal Data', async () => {
  setClientKey(CLIENT_KEY);
  const listing = await getSeason(season, year);

  expect(listing.data[2].node.id).toBe(animeId);
});

test('Get Seasonal Data', async () => {
  setClientKey(CLIENT_KEY);
  const listing = await getSeason(season, year, 'anime_num_list_users');

  expect(listing.data[9].node.id).toBe(27775);
});

test('Get the next page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let listing = await getSeason(season, year);

  listing = await getSeason.next(listing);
  expect(listing.data[0].node.id).toBe(30813);
});

test('Get the previous page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let listing = await getSeason(season, year);
  listing = await getSeason.next(listing);

  listing = await getSeason.previous(listing);
  expect(listing.data[2].node.id).toBe(animeId);
});