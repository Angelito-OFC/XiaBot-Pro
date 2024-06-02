import fg from 'api-dylux';
 import axios from 'axios';
 import cheerio from 'cheerio';
 import { tiktok } from "@xct007/frieren-scraper"; 
 import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
 import { tiktokdl } from '@bochilteam/scraper';
 let handler = async (m, { conn, text, args, usedPrefix, command}) => { 
 if (!text) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>` 
 if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙨𝙚𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>` 
 let texto = `🔮 @${m.sender.split`@`[0]} 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤.... 🔮` 
 try { 
  conn.sendMessage(m.chat, { text: texto, mentions: [m.sender]}, {quoted: m})
 await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })     
 const dataF = await tiktok.v1(args[0]) 
 //let desc1 =  `𝙐𝙎𝙐𝘼𝙍𝙄𝙊: ${dataF.nickname || 'Indefinido'}` 
 let desc1 =  `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙏𝙄𝙆𝙏𝙊𝙆 🔮` 
 await conn.sendMessage(m.chat, { video: { url: dataF.play }, caption: desc1 }, { quoted: m })   
 } catch (e1) { 
 try { 
 const tTiktok = await tiktokdlF(args[0]) 
 //let desc2 = `🔗 𝙐𝙍𝙇: ${tTiktok.video}`     
 let desc2 =  `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙏𝙄𝙆𝙏𝙊𝙆 🔮` 
 await conn.sendMessage(m.chat, { video: { url: tTiktok.video }, caption: desc2 }, { quoted: m })       
 } catch (e2) { 
 try { 
 let p = await fg.tiktok(args[0])  
 //let te = `𝙐𝙎𝙐𝘼𝙍𝙄𝙊: ${p.author || 'Indefinido'}` 
 let te =  `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙏𝙄𝙆𝙏𝙊𝙆 🔮` 
 await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te }, { quoted: m })   
 } catch (e3) { 
 try {  
 const { author: { nickname }, video, description } = await tiktokdl(args[0]) 
 const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd 
 //let cap = `𝙐𝙎𝙐𝘼𝙍𝙄𝙊: ${nickname || 'Indefinido'}` 
 let cap =  `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙏𝙄𝙆𝙏𝙊𝙆 🔮` 
 await conn.sendMessage(m.chat, { video: { url: url}, caption: cap }, { quoted: m })   
 } catch { 
 throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳 𝘢𝘭 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘴𝘶 𝘷𝘪𝘥𝘦𝘰.` 
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