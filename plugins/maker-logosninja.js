let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [teks1, teks2] = text.split('|')
  if (!teks1 || !teks2) return m.reply(`Masukan Format Dengan Benar!\n\nExample\n${usedPrefix + command} Ninja`)
  let res = API('https://api.lolhuman.xyz', '/api/textprome2/ninjalogo', { text1: teks1, text2: teks2 }, 'apikey')
  conn.sendFile(m.chat, res, 'ninja.jpg', 'Sudah Jadi Kak', m, false)
}
handler.help = ['logoninja']
handler.tags = ['nulis']
handler.command = /^(logoninja)$/i

handler.limit = true

export default handler