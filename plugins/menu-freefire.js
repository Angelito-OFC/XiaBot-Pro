import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
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
    const str = `┏━━━•💌 𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿 💌•━━━━┓
│╭─────────♡─────────╮
││•💜¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
│╰─────────♡─────────╯
││•💜𝘾𝙍𝙀𝘼𝘿𝙊𝙍/𝘼 
││•💜 wa.me/59168683798
││•💜𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
││•💜𝙁𝙀𝘾𝙃𝘼: ${date}
││•💜𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 💥𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀💥 」
┃╭───────⧟⭑⧟───────•
┃│🗺️.𝙢𝙚𝙣𝙪𝙛𝙛
┃│🗺️.𝙗𝙚𝙧𝙢𝙪𝙙𝙖
┃│🗺️.𝙠𝙖𝙡𝙖𝙝𝙖𝙧𝙞
┃│🗺️.𝙖𝙡𝙥𝙚𝙨
┃│🗺️.𝙥𝙪𝙧𝙜𝙖𝙩𝙤𝙧𝙞𝙤
┃│🗺️.𝙣𝙚𝙭𝙩𝙚𝙧𝙧𝙖
┃│🗺️.𝙖𝙜𝙚𝙣𝙙𝙖𝙨𝙚𝙢𝙖𝙣𝙖𝙡
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🔱𝘽𝙐𝙎𝘾𝘼𝙍 𝙑𝙎🔱 」
┃╭───────⧟⭑⧟───────•
┃│🔱.𝙗𝙪𝙨𝙘𝙖𝙧𝙫𝙨𝙢𝙖𝙨𝙘
┃│🔱.𝙗𝙨𝙢𝙨𝙖𝙘
┃│🔱.𝙗𝙪𝙨𝙘𝙖𝙧𝙫𝙨𝙛𝙚𝙢
┃│🔱.𝙗𝙨𝙛𝙚𝙢
┃│🔱.𝙗𝙪𝙨𝙘𝙖𝙧𝙫𝙨𝙢𝙞𝙭𝙩𝙤
┃│🔱.𝙗𝙨𝙢𝙞𝙭𝙩𝙤
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☯️𝙇𝙄𝙎𝙏𝘼𝙎 𝙁𝙀𝙈☯️ 」
┃╭───────⧟⭑⧟───────•
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤14
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤16
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤18
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤20
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤22
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤00
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤𝙫𝙨
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤14
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤16
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤18
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤20
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤22
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤00
┃│☯️.𝙛𝙚𝙢𝙫𝙞𝙫𝙞𝙙𝙤𝙫𝙨
┃│☯️.𝙛𝙚𝙢8𝙫𝙨8
┃│☯️.𝙛𝙚𝙢12𝙫𝙨12
┃│☯️.𝙛𝙚𝙢16𝙫𝙨16
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙩𝙚𝙧𝙣𝙖4
┃│☯️.𝙛𝙚𝙢𝙞𝙣𝙩𝙚𝙧𝙣𝙖6
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ☮️𝙇𝙄𝙎𝙏𝘼𝙎 𝙈𝘼𝙎𝘾☮️ 」
┃╭───────⧟⭑⧟───────•
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤14
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤16
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤18
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤20
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤22
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤00
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙤𝙫𝙨
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤14
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤16
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤18
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤20
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤22
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤00
┃│☮️.𝙢𝙖𝙨𝙘𝙫𝙞𝙫𝙞𝙙𝙤𝙫𝙨
┃│☮️.𝙢𝙖𝙨𝙘8𝙫𝙨8
┃│☮️.𝙢𝙖𝙨𝙘12𝙫𝙨12
┃│☮️.𝙢𝙖𝙨𝙘16𝙫𝙨16
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙩𝙚𝙧𝙣𝙖4
┃│☮️.𝙢𝙖𝙨𝙘𝙞𝙣𝙩𝙚𝙧𝙣𝙖6
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🌀𝙇𝙄𝙉𝙆𝙎/𝘼𝙋𝙆𝙎🌀 」
┃╭───────⧟⭑⧟───────•
┃│🌀.𝙨𝙥𝙖𝙢𝘼𝙥𝙠 /𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥
┃│🌀.𝙨𝙥𝙖𝙢𝘾𝙤𝙢𝙪 /𝘾𝙤𝙢𝙪𝙣
┃│🌀.𝙨𝙥𝙖𝙢2
┃│🌀.𝙧𝙘𝙪𝙧𝙨𝙤𝙨𝙙𝙯𝙣
┃│🌀.𝙙𝙧𝙞𝙫𝙚𝙨𝙙𝙯𝙣
┃│🌀.𝙙𝙯𝙣
┃│🌀.𝘼𝙥𝙠𝙀𝙙𝙞𝙩𝙨
┃│🌀.𝙙𝙧𝙞𝙫𝙚𝙀𝙙𝙞𝙩𝙨
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
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
    conn.reply(m.chat, '💜𝙀𝙨𝙩𝙚 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙩𝙚𝙧𝙣𝙤 𝙥𝙤𝙧 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤. 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙤 𝙖𝙡 𝙨𝙩𝙖𝙛𝙛.', m);
  }
};
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
