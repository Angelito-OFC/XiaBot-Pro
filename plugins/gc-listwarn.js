const handler = async (m, {conn, isOwner}) => {
  const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
  const warns = global.db.data.users.warn;
  const user = global.db.data.users;
  const imagewarn = './src/warn.jpg';
  const caption = `⚠️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙎\n 
*╔═══════════════════·•*
║ *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
*╚══════════════════·•*`;
  await conn.sendMessage(m.chat, {text: caption}, {quoted: m}, {mentions: await conn.parseMention(caption)});
};
handler.command = /^(listwarn)$/i;
handler.group = true;
handler.admin = true;
export default handler;
