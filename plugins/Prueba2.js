import uploadFile from '../lib/uploadFile.js'
import fs from 'fs'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let alok = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: 'T O U R L',
                            orderTitle: 'H A L O',
                            thumbnail: fs.readFileSync('./thumbnail.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `ðŸš© *ÊŸÉªÉ´á´‹:*
${link}
â˜˜ï¸ *sÉªá´¢á´‡ :* ${media.length} Byte
ðŸ *á´‡xá´˜ÉªÊ€á´‡á´… :* ${isTele ? 'No Expiry Date' : 'Unknown'}

â€“ *s Êœ á´ Ê€ á´› :* ${await shortUrl(link)}`
  conn.sendMessage(m.chat, {
    text: caption, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: '', 
    mediaType: 1,
    title: '',
    body: 'F U R I N A  M U L T I D E V I C E', 
    thumbnailUrl: 'https://telegra.ph/file/da63dc919f2260000ea97.jpg', 
    sourceUrl: 'https://chat.whatsapp.com/JXYH7oHexo63nBHp1OWQAd',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: alok})
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}