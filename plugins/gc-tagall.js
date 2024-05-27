const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `✉️ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}\n👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎: _*${participants.length}*_`;
  let teks = `🔮 𝙓𝙄𝘼 𝘽𝙊𝙏 𝙇𝙊𝙎 𝙄𝙉𝙑𝙊𝘾𝘼\n\n ${oi}\n\n┏・🔮 𝙧𝙚𝙫𝙞𝙫𝙖𝙣 𝙘𝙪𝙚𝙧𝙣𝙪𝙙@𝙨 !\n`;
  for (const mem of participants) {
    teks += `┣・🔮 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・ 𝙓𝙞𝙖𝘽𝙤𝙩-𝙈𝘿 🔮`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;