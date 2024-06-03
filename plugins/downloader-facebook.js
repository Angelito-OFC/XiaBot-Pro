import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘷𝘶𝘦𝘭𝘷𝘢 𝘢 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘳𝘭𝘰`, m, fake, )
console.log(`🔮 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽: ${usedPrefix + command} ⚠️\n`)
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘧𝘣 <𝘭𝘪𝘯𝘬>`, m, fake, )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘷𝘶𝘦𝘭𝘷𝘢 𝘢 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘳𝘭𝘰', m, fake, )
await conn.reply(m.chat, '🔮 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤.....', m, fake, )
m.react('⏳')
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = '𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 🔮'
break
case 'reel':
message = '𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙧𝙚𝙚𝙡𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 🔮'
break
case 'stories':
message = '𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 🔮'
break
case 'posts':
message = '𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙥𝙪𝙗𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 🔮'
break
default:
message = '𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 🔮'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb']
handler.tags = ['descargas']
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i

handler.register = true
//handler.diamond = true

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}