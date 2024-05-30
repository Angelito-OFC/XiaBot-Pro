
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {

        if (!args[0]) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>`
        if (!args[0].match(/tiktok/gi)) throw `
❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠 𝙨𝙚𝙖 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘵𝘪𝘬𝘵𝘰𝘬 <𝘭𝘪𝘯𝘬>`
        m.react(rwait)
      try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok2', { url: args[0] }, 'apikey'))
        let data = await res.json()

        if (data.result.video) {
            let tex = `𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙏𝙄𝙆𝙏𝙊𝙆 🔮`
            conn.sendFile(m.chat, data.result.video.noWatermark, 'tiktok.mp4', tex, m);
            m.react(done)
   } else {
            let cap = `
▢ *Descripción:* ${data.result.title}
▢ *Likes:* ${data.result.stats.likeCount}
`
            for (let tt of data.result.images) {
                conn.sendMessage(m.chat, { image: { url: tt.url }, caption: cap }, { quoted: m })
            }
            conn.sendFile(m.chat, data.result.music.play_url, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
            m.react(done)
        }
    } catch (error) {
        m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳 𝘢𝘭 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘴𝘶 𝘷𝘪𝘥𝘦𝘰.`)
    }
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt', 'tiktokimg', 'tiktokslide']
handler.diamond = true

export default handler