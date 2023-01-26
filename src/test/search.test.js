const { setClientKey, getInfoFromName, search } = require('../taki/index.js');
const { CLIENT_KEY } = require('../../config.json');

const ANIME_NAME = 'Hibike! Euphonium';

// Logic Testing
test('Anime Info by NAME', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getInfoFromName(ANIME_NAME);

    expect(data.id).toBe(27989);
    expect(data.title).toBe(ANIME_NAME);
});

test('Anime Search by NAME', async () => {
    setClientKey(CLIENT_KEY);
    const data = await search(ANIME_NAME);

    expect(data[0].id).toBe(27989);
    expect(data[0].title).toBe(ANIME_NAME);
});

// Exception Testing
test('rejects an invalid Name', async () => {
    await expect(getInfoFromName()).rejects.toThrow('[TAKI] Invalid Name');
    await expect(getInfoFromName(12345)).rejects.toThrow('[TAKI] Invalid Name');
});

test('rejects an invalid Name', async () => {
    await expect(search()).rejects.toThrow('[TAKI] Invalid Name');
    await expect(search(12345)).rejects.toThrow('[TAKI] Invalid Name');
});
