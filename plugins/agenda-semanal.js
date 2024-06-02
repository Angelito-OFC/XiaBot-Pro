import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`
  switch (command) {
    case 'agendaff':
      const url = await agendaff[Math.floor(Math.random() * agendaff.length)];
      conn.sendMessage(m.chat, {image: {url: url}, caption: `» 𝘼𝙂𝙀𝙉𝘿𝘼 𝙎𝙀𝙈𝘼𝙉𝘼𝙇 🔮`}, {quoted: m});
      break;
  }
};
handler.command = /^(agendasemanal|agendaff)$/i;
export default handler;

global.agendaff = [
  'https://telegra.ph/file/8d762cd280250591f4011.jpg',
];