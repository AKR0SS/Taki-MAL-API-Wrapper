const Taki = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

test('get next page', async() => {
    const taki = new Taki(CLIENT_KEY);
    let obj = await taki.searchAnime('Naruto', 2);
    obj = await taki.paginate(obj.paging.next);
});