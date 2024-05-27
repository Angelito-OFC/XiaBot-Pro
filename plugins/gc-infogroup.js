const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = imagen1;
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `「 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 」\n
𝙄𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:
${groupMetadata.id}

𝙉𝙤𝙢𝙗𝙧𝙚: 
${groupMetadata.subject}

𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙢𝙞𝙚𝙢𝙗𝙧𝙤𝙨:
${participants.length} miembros

𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤: 
@${owner.split('@')[0]}

𝘼𝙙𝙢𝙞𝙣𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:
${listAdmin}

𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊/𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊:

🔮 𝙒𝙚𝙡𝙘𝙤𝙢𝙚: ${welcome ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'}
🔮 𝘿𝙚𝙩𝙚𝙘𝙩: ${detect ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘿𝙚𝙩𝙚𝙘𝙩 𝟸: ${detect2 ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠: ${antiLink ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙡𝙞𝙣𝙠 𝟸: ${antiLink2 ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝙈𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮: ${modohorny ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧: ${autosticker ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙪𝙙𝙞𝙤𝙨: ${audios ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙫𝙞𝙚𝙬𝙤𝙣𝙘𝙚: ${antiviewonce ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚: ${antidelete ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘: ${antiToxic ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝘼𝙣𝙩𝙞𝙩𝙧𝙖𝙗𝙖: ${antiTraba ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
🔮 𝙈𝙤𝙙𝙤𝙖𝙙𝙢𝙞𝙣: ${modoadmin ? '𝘖𝘯 ✅' : '𝘖𝘧𝘧 ❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;