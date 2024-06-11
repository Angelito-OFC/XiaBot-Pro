import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙳𝙴𝙱𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙴𝚂 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾́, 𝙿𝚁𝙾𝙲𝚄𝚁𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾́ 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺`, fkontak,  m)  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝚅𝙸́𝙳𝙴𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺, 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁.`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', ` 𝚄𝚂𝚄𝙰𝚁𝙸𝙾\n*${nickname}*\n${description ? '\n⛱️ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `⛱️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? '\n⛱️ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉:\n*${description}*' : ''}\n${wm}`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `⛱️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊:\n*${nickname}*\n${description ? '\n⛱️ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉:\n*${description}*' : ''}\n${wm}`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? '\n𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉\n*${description}*' : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙏𝙄𝙆 𝙏𝙊𝙆, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, fkontak,  m) 
handler.limit = 0
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 2
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