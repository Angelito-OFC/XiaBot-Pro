import si from "systeminformation";
import {performance} from "perf_hooks";
import {sizeFormatter} from "human-readable";
import {cpus as _cpus} from "os";
let handler = async (m, {conn, usedPrefix}) => {

  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"))
  const groups = chats.filter(([id]) => id.endsWith("@g.us"))
  const {restrict, antiCall, antiprivado} = global.db.data.settings[conn.user.jid] || {}
  const {autoread, gconly, pconly, self} = global.opts || {}
  let pp = "imagen2"  
 let formatSize = sizeFormatter({ 
   std: "JEDEC", 
   decimalPlaces: 2, 
   keepTrailingZeroes: false, 
   render: (literal, symbol) => `${literal} ${symbol}B`, 
 }); 
 let ram = await si.mem(); 
 let cpu = await si.cpuCurrentSpeed(); 
 let disk = await si.fsSize(); 
 let json = { 
   memory: formatSize(ram.free) + " de " + formatSize(ram.total), 
   memory_used: formatSize(ram.used), 
   cpu: cpu.avg + " Ghz", 
   disk: formatSize(disk[0].available), 
 };
let info = `*🔮 I N F O R M A C I Ó N 🔮*
 
🔮꙰᠁❥ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧◞: Angelito
🔮꙰᠁❥ 𝙒𝙖: wa.me/59168683798
🔮꙰᠁❥ 𝙄𝙜:* @usxr_angelito
🔮꙰᠁❥ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 3.2.0
🔮꙰᠁❥ 𝙋𝙧𝙚𝙛𝙞𝙟𝙤: ( . )
🔮꙰᠁❥ 𝙈𝙤𝙙𝙤: Publico
🔮꙰᠁❥ 𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙: ${uptime}
🔮꙰᠁❥ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨: ${totalreg}
🔮꙰᠁❥ 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙: ${speed} ms
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙥𝙧𝙞𝙫: ${chats.length - groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙜𝙧𝙪𝙥𝙖𝙡: ${groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩𝙨 𝙩𝙤𝙩𝙖𝙡: ${chats.length}
🔮꙰᠁❥ 𝙎𝙪𝙗-𝘽𝙤𝙩𝙨: ${modejadibot ? "activado" : "desactivado"}`.trim();

conn.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/7f335b93c1ab52e3f243b.jpg", }, caption: info,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `INFO - XIA-BOT`,
sourceUrl: "https://www.instagram.com/usxr_angelito",
mediaType: 1,
showAdAttribution: true,
thumbnailUrl: "https://telegra.ph/file/7f335b93c1ab52e3f243b.jpg",
}}}, { quoted: m })
}  
handler.help = ["infobot"]
handler.tags = ["info", "tools"]
handler.command = /^(infobot|informacionbot|infoxia|informaciónxia|informacionxia)$/i;
export default handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}