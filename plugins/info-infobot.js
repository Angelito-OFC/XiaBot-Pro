import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'

var handler = async (m, { conn, usedPrefix }) => {

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length

const img = imagen1;
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}

let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `*🔮 I N F O R M A C I Ó N 🔮*
 
🔮꙰᠁❥ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧◞: Angelito
🔮꙰᠁❥ 𝙒𝙖: wa.me/59168683798
🔮꙰᠁❥ 𝙄𝙜: @usxr_angelito
🔮꙰᠁❥ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 3.2.0
🔮꙰᠁❥ 𝙋𝙧𝙚𝙛𝙞𝙟𝙤: ( . )
🔮꙰᠁❥ 𝙈𝙤𝙙𝙤: Publico
🔮꙰᠁❥ 𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙: ${uptime}
🔮꙰᠁❥ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨: ${totalreg}
🔮꙰᠁❥ 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙: ${speed} ms
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙥𝙧𝙞𝙫: ${chats.length - groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙜𝙧𝙪𝙥𝙖𝙡: ${groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩𝙨 𝙩𝙤𝙩𝙖𝙡: ${chats.length}
🔮꙰᠁❥ 𝙎𝙪𝙗-𝘽𝙤𝙩𝙨: ${modejadibot ? "activado" : "desactivado"}`

 conn.sendMessage(m.chat, { text: info, contextInfo: { externalAdReply: { title: packname, body: '', thumbnail: imagen1, sourceUrl: 'https://www.instagram.com/usxr_angelito', mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot|Infobot)$/i

handler.register = true

export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}