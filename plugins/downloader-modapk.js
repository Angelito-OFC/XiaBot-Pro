import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘢𝘱𝘵𝘰𝘪𝘥𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝘼𝙋𝙏𝙊𝙄𝘿𝙀 📲\n\n🔥 𝙉𝙊𝙈𝘽𝙍𝙀: ${data5.name}\n🚀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀: ${data5.package}\n⏳ 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏..: ${data5.lastup}\n🕋 𝙏𝘼𝙈𝘼Ñ𝙊: ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘭 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘦𝘴 𝘥𝘦𝘮𝘢𝘴𝘪𝘢𝘥𝘰 𝘱𝘦𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘭𝘰 𝘲𝘶𝘦 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘷𝘪𝘢𝘳𝘢.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳, 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘢𝘳𝘰𝘯 𝘳𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰𝘴 𝘱𝘢𝘳𝘢 𝘴𝘶 𝘣𝘶𝘴𝘲𝘶𝘦𝘥𝘢`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
