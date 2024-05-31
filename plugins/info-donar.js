var handler = async (m, { conn, command }) => {

let str = `🔮 𝘿 𝙊 𝙉 𝘼 𝙍

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
${xbig}

» 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/59897246324

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_
${md}`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler