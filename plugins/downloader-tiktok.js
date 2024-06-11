import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘋𝘦𝘣𝘦 𝘪𝘯𝘨𝘳𝘦𝘴𝘢𝘳 𝘶𝘯 𝘦𝘯𝘭𝘢𝘤𝘦 𝘷𝘢𝘭𝘪𝘥𝘰 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬 𝘱𝘢𝘳𝘢 𝘭𝘢 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘥𝘦𝘭 𝘷𝘪𝘥𝘦𝘰\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘖𝘤𝘶𝘳𝘳𝘪𝘰 𝘶𝘯 𝘦𝘳𝘳𝘰𝘳 𝘪𝘯𝘦𝘴𝘱𝘦𝘳𝘢𝘥𝘰 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘭𝘰 𝘯𝘶𝘦𝘷𝘢𝘮𝘦𝘯𝘵𝘦\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>`, fkontak,  m)  
await conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘹𝘪𝘵𝘰𝘴𝘰 𝘦𝘯 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰 𝘳𝘦𝘤𝘪𝘣𝘪𝘳𝘢 𝘦𝘭 𝘷𝘪𝘥𝘦𝘰`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? '\n⛱️ ${mid.smsYT14}\n*${description}*' : ''}\n${wm}`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `⛱️ ${mid.user}\n*${nickname}*\n${description ? `\n⛱️ ${mid.smsYT14}\n*${description}*` : ''}\n${wm}`.trim(), m)
handler.limit = 1
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
//handler.limit = 2
export default handler

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return 'Enlace incorrecto';
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}