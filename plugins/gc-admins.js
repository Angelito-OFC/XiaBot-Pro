let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = imagen1;
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `✉️ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}\n👤 𝘼𝘿𝙈𝙄𝙉𝙎: _*${participants.length}*_`
let text = `*ＡＤＭＩＮＳ  ＲＥＶＩＶＡＮ*\n\n
${oi}

・🔮𝘼𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:

${listAdmin} 

*[ ⚠ ️] 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙲𝚄𝙰𝙽𝙳𝙾 𝚂𝙴 𝚃𝚁𝙰𝚃𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙴𝙼𝙴𝚁𝙶𝙴𝙽𝙲𝙸𝙰!!*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
handler.register = true
export default handler