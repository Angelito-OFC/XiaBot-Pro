const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘪𝘨𝘴𝘵𝘰𝘳𝘺 <𝘶𝘴𝘦𝘳𝘯𝘢𝘮𝘦>`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('*[❗] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾 𝙾 𝚂𝙸𝙽 𝙷𝙸𝚂𝚃𝙾𝚁𝙸𝙰𝚂*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘜𝘴𝘶𝘢𝘳𝘪𝘰 𝘪𝘯𝘷𝘢𝘭𝘪𝘥𝘰 𝘰 𝘯𝘰 𝘵𝘪𝘦𝘯𝘦 𝘯𝘪𝘯𝘨𝘶𝘯𝘢 𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢 𝘳𝘦𝘤𝘪𝘦𝘯𝘵𝘦');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘜𝘴𝘶𝘢𝘳𝘪𝘰 𝘪𝘯𝘷𝘢𝘭𝘪𝘥𝘰 𝘰 𝘯𝘰 𝘵𝘪𝘦𝘯𝘦 𝘯𝘪𝘯𝘨𝘶𝘯𝘢 𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢 𝘳𝘦𝘤𝘪𝘦𝘯𝘵𝘦');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
