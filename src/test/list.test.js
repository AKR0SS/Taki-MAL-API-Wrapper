const { setClientKey, getUserWatchList } = require('../taki/index.js');

require("dotenv").config();
const CLIENT_KEY = process.env.CLIENT_KEY;

const USER = 'xAKROSSx';

// Exception Testing

test('rejects an invalid User', () => {
    expect(getUserWatchList('')).rejects.toThrow('[TAKI] Invalid User');
    expect(getUserWatchList(12345)).rejects.toThrow('[TAKI] Invalid User');
});

test('rejects an invalid User', () => {
    expect(getUserWatchList(USER)).rejects.toThrow('[TAKI] No MAL "CLIENT_KEY" provided');
});

// Logic Testing

test('Gets a user\'s watch list', async () => {
    setClientKey(CLIENT_KEY);
    const anime = await getUserWatchList(USER);
    expect(anime.data[0].node.id).toBe(1);
});