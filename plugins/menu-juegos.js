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
┃「 🎮𝙅𝙐𝙀𝙂𝙊𝙎🎮 」
┃╭───────⧟⭑⧟───────•
┃│🎮.𝘔𝘢𝘵𝘦𝘴
┃│🎮.𝘗𝘱𝘵𝘵
┃│🎮.𝘗𝘳𝘰𝘴𝘵𝘪𝘵𝘶𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘳𝘰𝘴𝘵𝘪𝘵𝘶𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘎𝘢𝘺2 <@𝘵𝘢𝘨>
┃│🎮.𝘓𝘦𝘴𝘣𝘪𝘢𝘯𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘢𝘫𝘦𝘳𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘢𝘫𝘦𝘳𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘶𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘗𝘶𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘔𝘢𝘯𝘤𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘔𝘢𝘯𝘤𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘙𝘢𝘵𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘕𝘦𝘨𝘳𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘕𝘦𝘨𝘳𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘍𝘦𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘍𝘦𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘱𝘰𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘵𝘦𝘵𝘢𝘴 <@𝘵𝘢𝘨>
┃│🎮.𝘚𝘪𝘯𝘱𝘪𝘵𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘈𝘥𝘰𝘱𝘵𝘢𝘥𝘢 <@𝘵𝘢𝘨>
┃│🎮.𝘈𝘥𝘰𝘱𝘵𝘢𝘥𝘰 <@𝘵𝘢𝘨>
┃│🎮.𝘓𝘰𝘷𝘦
┃│🎮.𝘓𝘰𝘴10
┃│🎮.𝘚𝘶𝘪𝘵𝘱𝘷𝘱
┃│🎮.𝘚𝘭𝘰𝘵
┃│🎮.𝘚𝘪𝘮𝘴𝘪𝘮𝘪
┃│🎮.𝘎𝘦𝘮𝘪𝘯𝘪
┃│🎮.𝘗𝘳𝘦𝘨𝘶𝘯𝘵𝘢
┃│🎮.𝘊𝘶𝘢𝘯𝘥𝘰
┃│🎮.𝘚𝘩𝘪𝘱5
┃│🎮.𝘈𝘣𝘳𝘢𝘻𝘰
┃│🎮.𝘚𝘩𝘪𝘱2
┃│🎮.𝘍𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
┃│🎮.𝘝𝘦𝘳𝘥𝘢𝘥
┃│🎮.𝘙𝘦𝘵𝘰
┃│🎮.𝘊𝘢𝘯𝘤𝘪𝘰𝘯
┃│🎮.𝘗𝘪𝘴𝘵𝘢
┃│🎮.𝘙𝘶𝘭𝘦𝘵𝘢
┃│🎮.𝘡𝘰𝘥𝘪𝘢𝘤
┃│🎮.𝘖𝘥𝘪𝘰
┃│🎮.𝘚𝘩𝘪𝘱
┃│🎮.𝘚𝘰𝘳𝘵𝘦𝘰
┃│🎮.𝘔𝘪𝘯𝘰𝘷𝘪𝘢
┃│🎮.𝘔𝘪𝘯𝘰𝘷𝘪𝘰
┃│🎮.𝘒𝘤𝘩𝘦𝘳𝘢
┃│🎮.𝘒𝘤𝘩𝘦𝘳𝘰
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
    conn.reply(m.chat, '🔮 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙮 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙥𝙤𝙧𝙩𝙚𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menugame|gamemenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
