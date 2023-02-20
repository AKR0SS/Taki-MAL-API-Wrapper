const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;
const animeID = 27989;
const animeURL = 'https://myanimelist.net/anime/27989/Hibike_Euphonium';

const mangaID = 90125;
const mangaURL = 'https://myanimelist.net/manga/90125/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen';

//! Logic Testing

test('Anime Info by ID', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getAnimeInfo(animeID);

  expect(data.id).toBe(animeID);
  expect(data.title).toBe('Hibike! Euphonium');
});

test('Anime Info by URL', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getAnimeInfo(animeURL);

  expect(data.id).toBe(animeID);
  expect(data.title).toBe('Hibike! Euphonium');
});

test('Optional Anime Info by ID parameters', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getAnimeInfo(animeID, 'source');

  expect(data.source).toBe('novel');
  expect(data.background).toBeUndefined();
});

test('Optional Anime Info by URL parameters', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getAnimeInfo(animeURL, 'source');

  expect(data.source).toBe('novel');
  expect(data.background).toBeUndefined();
});

test('Manga Info by ID', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getMangaInfo(mangaID);

  expect(data.id).toBe(mangaID);
});

test('Manga Info by URL', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getMangaInfo(mangaURL);

  expect(data.id).toBe(mangaID);
  expect(data.title).toBe('Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen');
});

test('Optional Manga Info by ID parameters', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getMangaInfo(mangaID, 'status');

  expect(data.status).toBe('finished');
  expect(data.rank).toBeUndefined();
});

test('Optional Manga Info by URL parameters', async () => {
  const taki = new Taki(CLIENT_KEY);
  const data = await taki.getMangaInfo(mangaURL, 'media_type');

  expect(data.media_type).toBe('manga');
  expect(data.status).toBeUndefined();
});

//! Error Testing

test('Invalid argument type', async () => {
  const taki = new Taki(CLIENT_KEY);

  expect(await taki.getAnimeInfo(false)).toBeNull();
  expect(await taki.getMangaInfo(false)).toBeNull();
});

test('Invalid anime argument content', () => {
  const taki = new Taki(CLIENT_KEY);

  expect(taki.getAnimeInfo(0)).rejects.toThrow();
  expect(taki.getAnimeInfo('')).rejects.toThrow();
  expect(taki.getAnimeInfo('https://myanimelist.com/')).rejects.toThrow();
});

test('Invalid manga argument content', () => {
  const taki = new Taki(CLIENT_KEY);

  expect(taki.getMangaInfo(0)).rejects.toThrow();
  expect(taki.getMangaInfo('')).rejects.toThrow();
  expect(taki.getMangaInfo('https://myanimelist.com/')).rejects.toThrow();
});