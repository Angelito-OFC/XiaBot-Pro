const handler = async (m, {conn}) => {
  m.reply(global.Femvivido16);
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
};
handler.command = /^(Femvivido16|femvivido16)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Femvivido16 = ` 
┏━━━━━━🐲𝐕𝐒 𝐅𝐄𝐌🐲━━━━━━┓
┃
┃            ✨ 𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 ✨
┃           ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
┃
┃      ෆ 𝘔𝘰𝘥𝘰: 𝚅𝙸𝚅𝙸𝙳𝙾
┃      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
┃    ‧₊⏰ 16 🇵🇪 ⌇ 17 🇧🇴 ⌇ 18 🇦🇷    
┃
┃ㅤㅤʚ 𝙹𝚄𝙶𝙰𝙳𝙾𝚁𝙰𝚂💫:
┃
┣・🐲• 
┣・🐲• 
┣・🐲• 
┣・🐲•
┃   ㅤㅤ
┃ㅤㅤʚ 𝚂𝚄𝙿𝙻𝙴𝙽𝚃𝙴𝚂💫:
┣・🐲•
┣・🐲•
┃
┃  ⊹ ִֶָ𝙳𝙾𝙽𝙰𝙳𝙾𝚁𝙰 𝙳𝙴 𝚂𝙰𝙻𝙰💫: 
┃ㅤ
┣・🐲•
┗━━━━━━━━━━━━━━━━━━━━━┛
`;