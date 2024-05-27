import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━•💌 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤 💌•━━━━┓
┃╭─────────♡─────────╮
┃┊•🔮¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
┃╰─────────♡─────────╯
┃┊•🔮𝘾𝙍𝙀𝘼𝘿𝙊𝙍/𝘼 
┃┊•🔮 wa.me/59897246324
┃┊•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
┃┊•🔮𝙁𝙀𝘾𝙃𝘼: ${date}
┃┊•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🎵 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🎵 」
┃╭───────⧟⭑⧟───────•
┃┊🎵 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 
┃┊𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, .)
┃┊
┃┊🎵𝘘𝘶𝘪𝘦𝘯 𝘦𝘴 𝘵𝘶 𝘴𝘦𝘮𝘱𝘢𝘪 𝘣𝘰𝘵𝘴𝘪𝘵𝘰 7𝘸7 
┃┊🎵𝘛𝘦 𝘥𝘪𝘢𝘨𝘯𝘰𝘴𝘵𝘪𝘤𝘰 𝘤𝘰𝘯 𝘨𝘢𝘺 
┃┊🎵𝘕𝘰 𝘥𝘪𝘨𝘢𝘴 𝘦𝘴𝘰 𝘱𝘢𝘱𝘶 
┃┊🎵𝘈 𝘯𝘢𝘥𝘪𝘦 𝘭𝘦 𝘪𝘮𝘱𝘰𝘳𝘵𝘢 
┃┊🎵𝘍𝘪𝘦𝘴𝘵𝘢 𝘥𝘦𝘭 𝘢𝘥𝘮𝘪𝘯 
┃┊🎵𝘍𝘪𝘦𝘴𝘵𝘢 𝘥𝘦𝘭 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 
┃┊🎵𝘝𝘪𝘷𝘢𝘯 𝘭𝘰𝘴 𝘯𝘰𝘷𝘪𝘰𝘴 
┃┊🎵𝘍𝘦𝘭𝘪𝘻 𝘤𝘶𝘮𝘱𝘭𝘦𝘢ñ𝘰𝘴 
┃┊🎵𝘕𝘰𝘤𝘩𝘦 𝘥𝘦 𝘱𝘢𝘻 
┃┊🎵𝘉𝘶𝘦𝘯𝘰𝘴 𝘥𝘪𝘢𝘴 
┃┊🎵𝘉𝘶𝘦𝘯𝘰𝘴 𝘵𝘢𝘳𝘥𝘦𝘴 
┃┊🎵𝘉𝘶𝘦𝘯𝘰𝘴 𝘯𝘰𝘤𝘩𝘦𝘴 
┃┊🎵𝘈𝘶𝘥𝘪𝘰 𝘩𝘦𝘯𝘵𝘢𝘪 
┃┊🎵𝘊𝘩𝘪𝘤𝘢 𝘭𝘨𝘢𝘯𝘵𝘦 
┃┊🎵𝘍𝘦𝘭𝘪𝘻 𝘯𝘢𝘷𝘪𝘥𝘢𝘥 
┃┊🎵𝘝𝘦𝘵𝘦 𝘢 𝘭𝘢 𝘷𝘳𝘨 
┃┊🎵𝘗𝘢𝘴𝘢 𝘱𝘢𝘤𝘬 
┃┊🎵𝘉𝘰𝘵 𝘈𝘵𝘦𝘯𝘤𝘪𝘰𝘯 𝘨𝘳𝘶𝘱𝘰 
┃┊🎵𝘔𝘢𝘳𝘪𝘤𝘢 𝘲𝘶𝘪𝘦𝘯 
┃┊🎵𝘔𝘶𝘳𝘪𝘰 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 
┃┊🎵𝘖𝘩 𝘮𝘦 𝘷𝘦𝘯𝘨𝘰 
┃┊🎵𝘵𝘪𝘰 𝘲𝘶𝘦 𝘳𝘪𝘤𝘰 
┃┊🎵𝘝𝘪𝘦𝘳𝘯𝘦𝘴 
┃┊🎵𝘉𝘢𝘯𝘦𝘢𝘥𝘰 
┃┊🎵𝘚𝘦𝘹𝘰 
┃┊🎵𝘏𝘰𝘭𝘢 
┃┊🎵𝘜𝘯 𝘱𝘢𝘵𝘰 
┃┊🎵𝘕𝘺𝘢𝘯𝘱𝘢𝘴𝘶 
┃┊🎵𝘛𝘦 𝘢𝘮𝘰 
┃┊🎵𝘠𝘢𝘮𝘦𝘵𝘦 
┃┊🎵𝘉𝘢ñ𝘢𝘵𝘦 
┃┊🎵𝘌𝘴 𝘱𝘶𝘵𝘰 
┃┊🎵𝘓𝘢 𝘣𝘪𝘣𝘭𝘪𝘢 
┃┊🎵𝘖𝘯𝘪𝘤𝘩𝘢𝘯 
┃┊🎵𝘔𝘪𝘦𝘳𝘥𝘢 𝘥𝘦 𝘉𝘰𝘵 
┃┊🎵𝘚𝘪𝘶𝘶𝘶 
┃┊🎵𝘌𝘱𝘪𝘤𝘰 
┃┊🎵𝘚𝘩𝘪𝘵𝘱𝘰𝘴𝘵
┃┊🎵𝘙𝘢𝘸𝘳 
┃┊🎵𝘜𝘸𝘜 
┃┊🎵:𝘤 
┃┊🎵𝘢
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🔮 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙮 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙥𝙤𝙧𝙩𝙚𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
