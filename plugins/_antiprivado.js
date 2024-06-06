export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`🔮 𝘏𝘰𝘭𝘢 @${m.sender.split`@`[0]}, 𝘌𝘴𝘵𝘢 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘩𝘢𝘣𝘭𝘢𝘳 𝘢𝘭 𝘱𝘳𝘪𝘷𝘢𝘥𝘰 𝘥𝘦𝘭 𝘣𝘰𝘵 𝘱𝘦𝘳𝘰 𝘴𝘪 𝘥𝘦𝘴𝘦𝘢𝘴 𝘵𝘦𝘯𝘦𝘳𝘭𝘰 𝘩𝘢𝘣𝘭𝘢 𝘢 𝘭𝘰𝘴 𝘴𝘪𝘨𝘶𝘪𝘦𝘯𝘵𝘦𝘴 𝘯𝘶𝘮𝘦𝘳𝘰𝘴 \nwa.me/59168683798`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
