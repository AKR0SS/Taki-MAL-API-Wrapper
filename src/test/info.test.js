const { setClientKey, getInfoFromURL, getInfoFromId } = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;
const testAnimeId = 27989;
const testAnimeURL = 'https://myanimelist.net/anime/27989/Hibike_Euphonium';

// Exception Testing

test('rejects fetch request if no client key was provided', () => {
  expect(getInfoFromId(testAnimeId)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(getInfoFromURL(testAnimeURL)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
});

test('rejects an invalid ID', () => {
  expect(getInfoFromId()).rejects.toThrow('[TAKI] Invalid ID');
  expect(getInfoFromId('test')).rejects.toThrow('[TAKI] Invalid ID');
});

test('rejects an invalid URL', () => {
  expect(getInfoFromURL()).rejects.toThrow('[TAKI] Invalid URL');
  expect(getInfoFromURL(12345)).rejects.toThrow('[TAKI] Invalid URL');
});

// Logic Testing

test('Anime Info by ID', async () => {
  setClientKey(CLIENT_KEY);
  const data = await getInfoFromId(testAnimeId);

  expect(data.id).toBe(testAnimeId);
  expect(data.title).toBe('Hibike! Euphonium');
});

test('Anime Info by URL', async () => {
  setClientKey(CLIENT_KEY);
  const data = await getInfoFromURL(testAnimeURL);

  expect(data.id).toBe(testAnimeId);
  expect(data.title).toBe('Hibike! Euphonium');
});