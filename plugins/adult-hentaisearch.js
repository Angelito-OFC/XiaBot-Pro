import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '🔮 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙨𝙞 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙮 𝙙𝙚𝙨𝙚𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤𝙨 𝙪𝙨𝙚 .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺';
  if (!text) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝙷𝙴𝙽𝚃𝙰𝙸 𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `
${i+1}. *_${v.title}_*
↳ 📺 *_Vistas:_* ${v.views}
↳ 🎞️ *_Link:_* ${v.url}`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*[❗] 𝙽𝙾 𝚂𝙴 𝙷𝙰𝙽 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};
handler.command = /^(hentaisearch|searchhentai)$/i;
export default handler;
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
