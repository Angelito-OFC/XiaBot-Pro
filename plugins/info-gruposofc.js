let handler = async (m, { conn, participants, groupMetadata }) => { 
const pp = imagen4;
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`
*ＧＲＵＰＯＳ  ＯＦＣ  ＸＩＡ ＢＯＴ*

𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘾𝙧𝙚𝙖𝙙𝙤𝙧

wa.me/59897246324

𝙎𝙤𝙥𝙤𝙧𝙩𝙚 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤

https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6

𝙂𝙡𝙤𝙗𝙖𝙡 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤

https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O

𝘾𝙖𝙣𝙖𝙡 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤

https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] }) 
await conn.sendButton(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], null, [
['𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', `${md}`]], fkontak)}
  
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v =>k v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(grupos|gruposofc)$/i
handler.admin = true;
handler.group = true
export default handler