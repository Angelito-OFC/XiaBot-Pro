import fg from 'api-dylux';
 import axios from 'axios';
 import cheerio from 'cheerio';
 import { tiktok } from "@xct007/frieren-scraper"; 
 import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
 import { tiktokdl } from '@bochilteam/scraper';
 let handler = async (m, { conn, text, args, usedPrefix, command}) => { 
 if (!text) throw `‎ ‎  ‎ ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ \n🧸 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 \n🧸 𝙐𝙨𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \n𝖤𝗃𝖾𝗆𝗉𝗅𝗈: .tiktok < LINK >` 
 if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw ` ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ \n🧸 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠 𝙨𝙚𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n🧸 𝙐𝙨𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 𝙙𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: \n𝖤𝗃𝖾𝗆𝗉𝗅𝗈: .tiktok <link>` 
 let texto = `🧸 @${m.sender.split`@`[0]} 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤.... 🧸` 
 try { 
  conn.sendMessage(m.chat, { text: texto, mentions: [m.sender]}, {quoted: m})
 await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })     
 const dataF = await tiktok.v1(args[0]) 
 //let desc1 =  `𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ${dataF.nickname || 'Indefinido'}` 
 let desc1 =  `𝗔𝗤𝗨𝗜 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨 𝗧𝗜𝗞𝗧𝗢𝗞 🧸` 
 await conn.sendMessage(m.chat, { video: { url: dataF.play }, caption: desc1 }, { quoted: m })   
 } catch (e1) { 
 try { 
 const tTiktok = await tiktokdlF(args[0]) 
 //let desc2 = `🔗 𝗨𝗥𝗟: ${tTiktok.video}`     
 let desc2 =  `𝗔𝗤𝗨𝗜 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨 𝗧𝗜𝗞𝗧𝗢𝗞 🧸` 
 await conn.sendMessage(m.chat, { video: { url: tTiktok.video }, caption: desc2 }, { quoted: m })       
 } catch (e2) { 
 try { 
 let p = await fg.tiktok(args[0])  
 //let te = `𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ${p.author || 'Indefinido'}` 
 let te =  `𝗔𝗤𝗨𝗜 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨 𝗧𝗜𝗞𝗧𝗢𝗞 🧸` 
 await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te }, { quoted: m })   
 } catch (e3) { 
 try {  
 const { author: { nickname }, video, description } = await tiktokdl(args[0]) 
 const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd 
 //let cap = `𝗨𝗦𝗨𝗔𝗥𝗜𝗢: ${nickname || 'Indefinido'}` 
 let cap =  `𝗔𝗤𝗨𝗜 𝗧𝗜𝗘𝗡𝗘 𝗦𝗨 𝗧𝗜𝗞𝗧𝗢𝗞 🧸` 
 await conn.sendMessage(m.chat, { video: { url: url}, caption: cap }, { quoted: m })   
 } catch { 
 throw ` ━━「 🌸 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗖 𝗜 𝗢 𝗡 🌸 」━━\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ \n🧸 𝗛𝘂𝗯𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗮𝗹 𝗱𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿\n 𝘀𝘂 𝘃𝗶𝗱𝗲𝗼.` 
 }}}}} 
 handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i 
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