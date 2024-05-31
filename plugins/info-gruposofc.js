var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `🔮 𝘾𝙐𝙀𝙉𝙏𝘼𝙎  𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

» 𝙂𝙄𝙏 𝙃𝙐𝘽
${gtb}

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
${ig}

» 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙇
wa.me/59897246324

» 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏
wa.me/59895294138

» 𝙀𝙈𝘼𝙄𝙇 𝙓𝘽
agasistencia2@gmail.com

» *Threads*


» *X*


» 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈
https://t.me/globalxiapro`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🚩 *Grupos oficiales*

⬡ *XiaBot-Pro*


⬡ *Enlaces Curiosity*


⬡ *Curiosity Global*


🎌 *Colaboraciones*

`

conn.reply(m.chat, text, m, fake, )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^(cuentasoficiales|cuentasofc|cuentas|grupos)$/i

handler.register = true

export default handler