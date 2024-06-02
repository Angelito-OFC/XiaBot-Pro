import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = pies[Math.floor(Math.random() * pies.length)]
conn.sendFile(m.chat, url, 'error.jpg', `🥵 ♥ PIES ♥  🥵`, m)
//conn.sendButton(m.chat, `🥵 ♥ PIES ♥  🥵`, author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['pies']
handler.tags = ['internet']
handler.command = /^(pies)$/
handler.exp = 50
handler.level = 3
export default handler


global.pies = [
"https://telegra.ph/file/b25ad26c409baa5356e8d.jpg",
"",
"https://telegra.ph/file/3d4da86ece95acd6226c2.jpg",
"https://telegra.ph/file/9abffade5e07af96d291e.jpg",
"https://telegra.ph/file/74e9f3593eeadb2ba7bce.jpg",
"https://telegra.ph/file/4cfe0b4410aebe83c08c6.jpg",
"https://telegra.ph/file/d0ef77df0c9761e2fde26.jpg",
"https://telegra.ph/file/3511c5812851edc1a7fd6.jpg",
"https://telegra.ph/file/4cbd6a4d9185224c54a70.jpg",
"https://telegra.ph/file/001a74b1823b4e781bdca.jpg",
]