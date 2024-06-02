const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘵𝘪𝘦𝘯𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘥𝘰 𝘦𝘭 ( .𝘦𝘯𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵 / .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵 ) 𝘦𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰.';
  const kicktext = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘦 𝘢 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢 𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘭𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰\n\n🔮 𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘬𝘪𝘤𝘬 @${global.suittag}`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘦 𝘢 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢 𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘢 𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘭𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘕𝘰 𝘱𝘶𝘦𝘥𝘰 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘮𝘦 𝘈𝘮𝘪 𝘮𝘪𝘴𝘮𝘰.\n𝘴𝘢𝘤𝘢𝘮𝘦 𝘮𝘢𝘯𝘶𝘢𝘭𝘮𝘦𝘯𝘵𝘦 𝘴𝘪 𝘩𝘢𝘤𝘪 𝘭𝘰 𝘥𝘦𝘴𝘦𝘢𝘴');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `@${mentioned.split('@')[0]} 𝙁𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤`;
    const error1 = `@${mentioned.split('@')[0]} 𝙀𝙨 𝙚𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙡𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧`;
    const error2 = `@${mentioned.split('@')[0]} 𝙔𝙖 𝙖 𝙨𝙞𝙙𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙤 𝙨𝙚 𝙝𝙖 𝙨𝙖𝙡𝙞𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝘖𝘤𝘶𝘳𝘳𝘪𝘰 𝘶𝘯 𝘦𝘳𝘳𝘰𝘳 𝘪𝘯𝘦𝘴𝘱𝘦𝘳𝘢𝘥𝘰`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|echar|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;