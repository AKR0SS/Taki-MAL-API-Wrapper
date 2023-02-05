const { setClientKey, getInfoFromName, search } = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;
const ANIME_NAME = 'Hibike! Euphonium';

// Exception Testing

test('rejects an invalid Name', () => {
  expect(getInfoFromName()).rejects.toThrow('[TAKI] Invalid Name');
  expect(getInfoFromName(12345)).rejects.toThrow('[TAKI] Invalid Name');
});

test('rejects an invalid Name', () => {
  expect(search()).rejects.toThrow('[TAKI] Invalid Name');
  expect(search(12345)).rejects.toThrow('[TAKI] Invalid Name');
});

test('reject null client keyt', () => {
  const obj = {};

  expect(getInfoFromName(ANIME_NAME)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(search(ANIME_NAME)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(search.next(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(search.previous(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
});

test('rejects invalid paging data', () => {
  expect(search.next('')).rejects.toThrow('[TAKI] Invalid Data');
  expect(search.previous('')).rejects.toThrow('[TAKI] Invalid Data');
});

test('rejects invalid pagination', async () => {
  setClientKey(CLIENT_KEY);
  const anime = await search('ww,');

  expect(search.next(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
  expect(search.previous(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
});

// Logic Testing

test('Anime Info by NAME', async () => {
  setClientKey(CLIENT_KEY);
  const data = await getInfoFromName(ANIME_NAME);

  expect(data.node.id).toBe(27989);
  expect(data.node.title).toBe(ANIME_NAME);
});

test('Anime Info by NAME with custom fields', async () => {
  setClientKey(CLIENT_KEY);
  const data = await getInfoFromName(ANIME_NAME, 'id,title,main_picture,source');

  expect(data.node.source).toBe('novel');
  expect(data.node.synopsis).toBe(undefined);
});

test('Anime Search by NAME', async () => {
  setClientKey(CLIENT_KEY);
  const data = await search(ANIME_NAME);

  expect(data.data[0].node.id).toBe(27989);
  expect(data.data[0].node.title).toBe(ANIME_NAME);
});

test('Get the next page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let anime = await search(ANIME_NAME);

  anime = await search.next(anime);
  expect(anime.data[0].node.id).toBe(31989);
});

test('Get the previous page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let anime = await search(ANIME_NAME);
  anime = await search.next(anime);

  anime = await search.previous(anime);
  expect(anime.data[0].node.id).toBe(27989);
});