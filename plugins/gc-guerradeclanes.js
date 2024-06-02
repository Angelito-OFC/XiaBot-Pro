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
╭───────────────────╮
│ㅤ⏱ 𝙃𝙊𝙍𝘼𝙍𝙄𝙊:
│➥ 
│➥ 𝙅𝙐𝙂𝘼𝘿𝙊𝙍𝙀𝙎:
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
╰───────────────────╯
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(guerra|guerradeclanes)$/i
handler.admin = true;
handler.group = true
export default handler