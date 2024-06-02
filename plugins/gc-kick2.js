const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘵𝘪𝘦𝘯𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘥𝘰 𝘦𝘭 ( .𝘦𝘯𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵 / .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵 ) 𝘦𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰.';
  const kicktext = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘦 𝘢 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢 𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘭𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰\n\n🔮 𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘬𝘪𝘤𝘬2 @${global.suittag}`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
