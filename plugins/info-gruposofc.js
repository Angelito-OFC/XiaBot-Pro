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

» 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
https://atom.bio/agasistencia

» 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈
https://t.me/globalxiapro`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🔮 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

» 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙋𝙍𝙊 𝙊𝙁𝘾
https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6

» 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙋𝙍𝙊 𝙂𝙇𝙊𝘽𝘼𝙇
https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O

» 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙋𝙍𝙊 𝘾𝘼𝙉𝘼𝙇
https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y

» *Colaboraciones*

`

conn.reply(m.chat, text, m, fake, )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^(cuentasoficiales|cuentasofc|cuentas|grupos)$/i

handler.register = true

export default handler