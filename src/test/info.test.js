const { setClientKey, getInfoFromURL, getInfoFromId } = require('../taki/index.js');
const { CLIENT_KEY } = require('../../config.json');

const testAnimeURL = 'https://myanimelist.net/anime/27989/Hibike_Euphonium';

// Logic Testing
test('Anime Info by ID', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getInfoFromId(27989);

    expect(data.id).toBe(27989);
    expect(data.title).toBe('Hibike! Euphonium');
});

test('Anime Info by URL', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getInfoFromURL(testAnimeURL);

    expect(data.id).toBe(27989);
    expect(data.title).toBe('Hibike! Euphonium');
});

// Exception Testing
test('rejects an invalid ID', async () => {
    await expect(getInfoFromId()).rejects.toThrow('[TAKI] Invalid ID');
    await expect(getInfoFromId('test')).rejects.toThrow('[TAKI] Invalid ID');
});

test('rejects an invalid URL', async () => {
    await expect(getInfoFromURL()).rejects.toThrow('[TAKI] Invalid URL');
    await expect(getInfoFromURL(12345)).rejects.toThrow('[TAKI] Invalid URL');
})