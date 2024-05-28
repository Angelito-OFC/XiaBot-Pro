
import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {

  if (!text) throw `✳️ Ingrese el Username de un usuario de TikTok`
try {
  let res = await fg.ttStalk(args[0])
  let txt = `
*Ｔ Ｉ Ｋ Ｔ Ｏ Ｋ  Ｓ Ｔ Ａ Ｌ Ｋ*

» 𝙉𝙤𝙢𝙗𝙧𝙚𝙨: ${res.name}
» 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚: ${res.username}
» 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨: ${res.followers}
» 𝙇𝙞𝙠𝙚𝙨: ${res.I like}
» 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙙𝙤: ${res.following}
» 𝘿𝙚𝙨𝙘:
 ${res.desc}

» 🔗 𝙇𝙞𝙣𝙠 : https://tiktok.com/${res.username}

» 𝘽𝙔: 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙋𝙍𝙊`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch {
    m.reply(`✳️ Revisa que el nombre de usuario sea de TikTok`)
}
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler