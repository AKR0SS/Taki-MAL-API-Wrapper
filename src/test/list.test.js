const { setClientKey, getUserWatchList } = require('../taki/index.js');

require("dotenv").config();
const CLIENT_KEY = process.env.CLIENT_KEY;

const USER = 'xAKROSSx';
const EMPTY_USER = 'emptyaccountlist';

// Exception Testing

test('rejects an invalid User', () => {
  expect(getUserWatchList('')).rejects.toThrow('[TAKI] Invalid User');
  expect(getUserWatchList(12345)).rejects.toThrow('[TAKI] Invalid User');
});

test('rejects an invalid Client Key', async () => {
  const obj = {};

  expect(getUserWatchList(USER)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(getUserWatchList.next(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
  expect(getUserWatchList.previous(obj)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
});

test('rejects invalid paging data', () => {
  expect(getUserWatchList.next('')).rejects.toThrow('[TAKI] Invalid Data');
  expect(getUserWatchList.previous('')).rejects.toThrow('[TAKI] Invalid Data');
});

test('rejects invalid pagination', async () => {
  setClientKey(CLIENT_KEY);
  const anime = await getUserWatchList(EMPTY_USER);

  expect(getUserWatchList.next(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
  expect(getUserWatchList.previous(anime)).rejects.toThrow('[TAKI] Cannot access page that does not exist');
});

// Logic Testing

test('Gets a user\'s watch list', async () => {
  setClientKey(CLIENT_KEY);
  const anime = await getUserWatchList(USER);

  expect(anime.data[0].node.id).toBe(1);
});

test('Get the next page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let anime = await getUserWatchList(USER);

  anime = await getUserWatchList.next(anime);
  expect(anime.data[0].node.id).toBe(37510);
});

test('Get the previous page from watch list', async () => {
  setClientKey(CLIENT_KEY);
  let anime = await getUserWatchList(USER);
  anime = await getUserWatchList.next(anime);

  anime = await getUserWatchList.previous(anime);
  expect(anime.data[0].node.id).toBe(1);
});