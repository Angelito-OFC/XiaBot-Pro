let handler = async (m, { conn, participants, groupMetadata }) => { 
const pp = imagen4;
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`
*ＤＯＮＡＲ ＸＩＡ ＢＯＴ*

» 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/59897246324

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
https://www.instagram.com/usxr_angelito

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_

» 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊
https://github.com/Karim-off/XiaBot-Pro


> XiaBot-Pro: Angelito`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] }) 
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v =>k v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(donar|apoyar)$/i
handler.exp = 15
export default handler