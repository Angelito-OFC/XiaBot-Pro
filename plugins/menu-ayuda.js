import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'


const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const datas = global;
    const device = await getDevice(m.key.id);
const pp = imagen1;
const img = imagen4;

  if (!text) throw `⚠️ *Error*`;

  if (device !== 'desktop' || device !== 'web') {      

  const results = await yts(text);
  const videos = results.videos.slice(0, 20);
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  var messa = await prepareWAMessageMedia({ image: img, { upload: conn.waUploadToServer })
  const interactiveMessage = {
    body: { text: `•🧸𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼
•🧸 wa.me/5493585753625\n•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 1.0.0\n•🧸𝙁𝙀𝘾𝙃𝘼: \n•🧸𝙉𝙄𝙑𝙀𝙇: \n•🧸𝙀𝙓𝙋: \n•🧸𝙍𝘼𝙉𝙂𝙊: \n•🧸𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎: \n•🧸𝙎𝘼𝙈𝙈𝙔𝘾𝙊𝙄𝙉𝙎:\n•🧸𝙏𝙊𝙆𝙀𝙉𝙎:\n•🧸𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏:`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*🧸 ＨＥＬＰ  ＭＥＮＵ 🧸*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'MENUS XIA',
            sections: videos.map((video) => ({
              title: video.title,
              rows: [
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'Descargar MP3',
                  id: `${prefijo}ytmp3 ${video.url}`
                },
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'Descargar MP4',
                  id: `${prefijo}ytmp4 ${video.url}`
                }
              ]
            }))
          })
        }
      ],
      messageParamsJson: ''
    }
  };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

  } else {
]})
await conn.sendList(m.chat, '👋🏻 Hola¡! Bienvenido A Mi Sub Menú\n\n*Creador:* Alba070503\n*Versión:* 1.0.0\n\n💮 si hay algún error puedes contactarme, usa el comando: #owner\n\nGracias¡! 🔴', null, `Selecione la opción correcta (⁠・⁠∀⁠・⁠)`, listSections, { mentions: [m.sender]}, {quoted: m})
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['help', 'menu'] 
handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
      }