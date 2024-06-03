import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `❱❱ 𝘼  𝙑  𝙄  𝙎  𝙊 ❰❰

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙀𝙧𝙧𝙤𝙣𝙚𝙤.

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙤: 
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘣𝘢𝘳𝘥 𝘲𝘶𝘦 𝘴𝘰𝘴?`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = ['bard', 'bard']
handler.help = ['bard', 'bard']
handler.tags = ['ai']

handler.premium = false

export default handler