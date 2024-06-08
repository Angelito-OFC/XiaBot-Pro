let handler = async (m, { conn, participants, groupMetadata }) => { 
const pp = imagen4;
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`
╭──────>⋆☽⋆ ⋆☾⋆<──────╮
ㅤ   𝙂𝙐𝙀𝙍𝙍𝘼 𝘿𝙀 𝘾𝙇𝘼𝙉𝙀𝙎
         ${groupMetadata.subject}
╰──────>⋆☽⋆ ⋆☾⋆<──────╯

`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(grupos|gruposofc)$/i
handler.admin = true;
handler.group = true
export default handler