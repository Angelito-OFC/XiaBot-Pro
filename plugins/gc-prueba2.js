let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let texto = `╭──────>⋆☽⋆ ⋆☾⋆<──────╮
ㅤ   GUERRA DE CLANES
        ${groupMetadata.subject}
╰──────>⋆☽⋆ ⋆☾⋆<──────╯
╭───────────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│➥ 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟏
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│     
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟐
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟑
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟒
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟓
│
│🔮 ➤ 
│🔮 ➤
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟔
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
│🔮 ➤ 
│🔮 ➤
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
╰───────────────────╯`

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
await conn.sendFile(m.chat, texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['prueba2'] 
handler.register = true
handler.admin = true
export default handler