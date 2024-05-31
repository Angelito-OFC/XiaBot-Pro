var handler = async (m, { conn, command }) => {

let str = `🔮 𝘿 𝙊 𝙉 𝘼 𝙍  𝙓 𝙄 𝘼 𝙋 𝙍 𝙊

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
${ig}

» 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/59897246324

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_

» 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊
${github}

» 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝘾
${md}`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^(donar|donate|donarxia)i$/i

handler.register = true

export default handler