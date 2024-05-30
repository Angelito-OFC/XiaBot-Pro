import { tiktokdl } from 'tiktok-scraper'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
  if (!args[0]) throw `*ejemplo:* ${usedPrefix+command} https://vm.tiktok.com/ZMME5XBt3/`;
  let data = await downloadTikTokMusic(url);
  await conn.sendMessage(m.chat, { react: { text: "â�³", key: m.key } });
conn.sendMessage(m.chat, { audio: { url: data.originalVideoUrl }, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3` }, { quoted: m })
}
handler.help = ['tiktokmp3', 'tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokaudio|tiktokmp3|)$/i
export default handler

const TikTok = require('');
const got = require('got');

async function downloadTikTokMusic(url) {
  const tiktok = new TikTok({ username });
  const profile = await tiktok.users.profile();