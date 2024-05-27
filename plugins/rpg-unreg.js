import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '🔮 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀, 𝙎𝙄 𝙉𝙊 𝙎𝘼𝘽𝙀 𝘾𝙐𝘼𝙇 𝙀𝙎 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '🔮 𝙑𝙀𝙍𝙄𝙁𝙄𝙌𝙐𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙀𝙇 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *#myns* 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙎𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀';
  user.registered = false;
  m.reply(`🔮 𝙐𝙎𝙏𝙀𝘿 𝙔𝘼 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊(𝘼)`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
