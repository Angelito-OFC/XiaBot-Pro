/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘤𝘢𝘴𝘪𝘯𝘰 <𝘢𝘱𝘶𝘦𝘴𝘵𝘢>`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*`;
  if (apuesta < 10) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘭 𝘮𝘪𝘯𝘪𝘮𝘰 𝘥𝘦 𝘢𝘱𝘰𝘴𝘵𝘢𝘳 𝘦𝘴 𝘥𝘦 10 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴 🪙';
  if (users.money < apuesta) {
    throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮𝘛𝘶𝘴 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴 𝘯𝘰 𝘴𝘰𝘯 𝘴𝘶𝘧𝘪𝘤𝘪𝘦𝘯𝘵𝘦𝘴 𝘱𝘢𝘳𝘢 𝘢𝘱𝘰𝘴𝘵𝘢𝘳 𝘦𝘴𝘢 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥.\n\n🔮 𝘑𝘶𝘦𝘨𝘢𝘴 𝘰𝘵𝘳𝘰𝘴 𝘫𝘶𝘦𝘨𝘰𝘴 𝘰 𝘪𝘯𝘵𝘦𝘳𝘢𝘤𝘵𝘶𝘢 𝘤𝘰𝘯 𝘟𝘪𝘢 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳 𝘮𝘢𝘴 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴`;
  }
  const emojis = ['🐋', '🦀', '🪼'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `🥳 𝙂𝘼𝙉𝘼𝙎𝙏𝙀!  +${apuesta + apuesta} 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴 🪙`;
    users.money += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `😮‍💨 𝘾𝘼𝙎𝙄 𝙇𝙊 𝙇𝙊𝙂𝙍𝘼𝙎!, 𝘴𝘪𝘨𝘶𝘦 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘯𝘥𝘰\n𝙏𝙤𝙢𝙖 +13 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴 🪙`;
    users.money += 13;
  } else {
    end = `😣 𝙋𝙀𝙍𝘿𝙄𝙎𝙏𝙀 -${apuesta} 𝘟𝘪𝘢𝘊𝘰𝘪𝘯𝘴 🪙`;
    users.money -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
🎰 | *CASINO XIA* 
──────────────
${x[0]}   :   ${y[0]}   :   ${z[0]}

${x[1]}   :   ${y[1]}   :   ${z[1]}

${x[2]}   :   ${y[2]}   :   ${z[2]}
──────────────
🎰 | ${end}`);
};
handler.help = ['casino <apuesta>'];
handler.tags = ['game'];
handler.command = ['casino'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}