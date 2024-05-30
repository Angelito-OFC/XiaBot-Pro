let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = imagen2; 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`
╭─────────⚔────────╮
ㅤ 𝐒𝐂𝐑𝐈𝐌𝐒 𝐂𝐎𝐌𝐏𝐄𝐓𝐈𝐓𝐈𝐕𝐎
╰─────────⚔────────╯
╭───────────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│ㅤ🇲🇽 𝐌𝐄𝐗 : 
│ㅤ🇨🇴 𝐂𝐎𝐋 : 
│➥ 𝐓𝐎𝐓𝐀𝐋 𝐒𝐀𝐋𝐀𝐒:
│➥ 𝐂𝐀𝐒𝐈𝐋𝐋𝐀:
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟏
│
│🔮 ➤ 
│🔮 ➤  
│🔮 ➤ 
│🔮 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🔮 ➤  
│
│
│➥ 𝐓𝐎𝐓𝐀𝐋 𝐒𝐀𝐋𝐀𝐒:
│➥ 𝐂𝐀𝐒𝐈𝐋𝐋𝐀:
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 𝟐
│
│🔮 ➤ 
│🔮 ➤  
│🔮 ➤ 
│🔮 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│🔮 ➤  
╰───────────────────╯
`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(scrim|scrim1)$/i
handler.admin = true;
handler.group = true
export default handler