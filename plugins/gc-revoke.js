/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔮 𝙎𝙀 𝙍𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙄𝙊 𝙀𝙇 𝙇𝙄𝙉𝙆 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\n• 𝙇𝙞𝙣𝙠 𝙉𝙪𝙚𝙫𝙤: ${'https://chat.whatsapp.com/' + revoke}`, m);
};
handler.command = ['resetlink', 'revoke'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
