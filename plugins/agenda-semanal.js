let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/8d762cd280250591f4011.jpg' 
let texto = `» 𝘼𝙂𝙀𝙉𝘿𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇 🔮`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['agendasemanal'] 
handler.register = true
export default handler


import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔮 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙨𝙞 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙮 𝙙𝙚𝙨𝙚𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤𝙨 𝙪𝙨𝙚 .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺';
  switch (command) {
    case 'pack':
      const url = await pack[Math.floor(Math.random() * pack.length)];
      conn.sendMessage(m.chat, {image: {url: url}, caption: `_🥵 Pack 🥵_`}, {quoted: m});
      break;