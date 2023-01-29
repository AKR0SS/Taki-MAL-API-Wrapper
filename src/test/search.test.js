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

// Logic Testing

test('Anime Info by NAME', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getInfoFromName(ANIME_NAME);

    expect(data.node.id).toBe(27989);
    expect(data.node.title).toBe(ANIME_NAME);
});

test('Anime Search by NAME', async () => {
    setClientKey(CLIENT_KEY);
    const data = await search(ANIME_NAME);
    
    expect(data.data[0].node.id).toBe(27989);
    expect(data.data[0].node.title).toBe(ANIME_NAME);
});