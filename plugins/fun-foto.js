import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    try {
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `*Result:* ${text}
*Source:* Google
`,m)
} catch (e) {
  m.reply(`𝘕𝘰 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘢𝘮𝘰𝘴 𝘭𝘰 𝘲𝘶𝘦 𝘣𝘶𝘴𝘤𝘢𝘴

Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['foto <query>']
handler.tags = ['internet']
handler.command = /^(foto)$/i
handler.limit = true
export default handler