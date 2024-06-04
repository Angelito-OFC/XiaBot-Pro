import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
let url = agenda[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `» 𝘼𝙂𝙀𝙉𝘿𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇 🔮`, m)
//conn.sendButton(m.chat, `» 𝘼𝙂𝙀𝙉𝘿𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇 🔮`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['agenda']
handler.tags = ['internet']
handler.command = /^(agendasemanal|agenda)$/
handler.exp = 50
handler.level = 0
export default handler


global.agenda = [
"https://telegra.ph/file/8d762cd280250591f4011.jpg",
]