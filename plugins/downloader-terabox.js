import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, args }) => {
  try {
    if (!args[0]) return m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘦𝘳𝘢𝘣𝘰𝘹 <𝘭𝘪𝘯𝘬>`)
    if (!args[0].match(/(https:\/\/teraboxapp.com)/gi)) return m.reply(status.invalid)
    conn.sendMessage(m.chat, { react: { text: "ðŸ•›", key: m.key, }})
    const json = await Func.fetchJson(`https://api.alyachan.pro/api/terabox?url=${args[0]}&apikey=3cCZNi`)
    if (!json.status) return m.reply(Func.jsonFormat(json))
    let xSize = Func.sizeLimit(json.data.size, global.max_upload)
    if (xSize.oversize) return m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮𝘌𝘭 𝘵𝘢𝘮𝘢ñ𝘰 𝘥𝘦𝘭 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 (${json.data.size}) 𝘦𝘴 𝘥𝘦𝘮𝘢𝘴𝘪𝘢𝘥𝘰 𝘨𝘳𝘢𝘯𝘥𝘦, 𝘥𝘦𝘴𝘤á𝘳𝘨𝘶𝘦𝘭𝘰 𝘶𝘴𝘵𝘦𝘥 𝘮𝘪𝘴𝘮𝘰 𝘢 𝘵𝘳𝘢𝘷é𝘴 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘦𝘯𝘭𝘢𝘤𝘦 : ${await (await Func.shortlink(json.data.url))}`)
    conn.sendMedia(m.chat, json.data.url, m, {
      fileName: json.data.filename,
      mentions: [m.sender]
    })
    conn.sendMessage(m.chat, { react: { text: "» 𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 🔮", key: m.key, }})
  } catch (e) {
    console.log(e)
    m.reply(Func.jsonFormat(e))
  }
}
handler.help = handler.command = ['terabox']
handler.tags = ['downloader']
handler.limit = true

export default handler