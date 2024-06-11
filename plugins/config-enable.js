const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `🤖𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏\n\n _funcion para activar y desactivar funciones del bot para activar usa .enable
para desactivar usa .disable_

• 𝗗𝗮𝗿 𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗮𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼
*» .enable welcome*

• 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣
*» .enable detect*

• 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣2
*» .enable detect2*

• 𝗥𝗲𝗲𝗻𝘃𝗶𝗮 𝗶𝗺𝗴/𝘃𝗶𝗱𝗲𝗼 𝘁𝗲𝗺𝗽𝗼𝗿𝗶𝘇𝗮𝗱𝗼𝘀
*» .enable antiviewonce*

• 𝗥𝗲𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀
*» .enable antidelete*

• 𝗘𝗻𝘃𝗶𝗮 𝗮𝘂𝗱𝗶𝗼𝘀 𝗽𝗼𝗿 𝗽𝗮𝗹𝗮𝗯𝗿𝗮𝘀 𝗰𝗹𝗮𝘃𝗲
*» .enable audios*

• 𝗕𝗼𝘁 𝗽𝘂𝗯𝗹𝗶𝗰𝗼
*» .enable public*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝗻𝘂𝗺𝗲𝗿𝗼𝘀 𝗮𝗿𝗮𝗯𝗲𝘀
*» .enable antiarabes*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝗻𝘂𝗺𝗲𝗿𝗼𝘀 𝗮𝗿𝗮𝗯𝗲𝘀2
*» .enable antiarabes2*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝘁𝗲𝘅𝘁𝗼𝘀 𝗺𝘂𝘆 𝗹𝗮𝗿𝗴𝗼𝘀
*» .enable antitraba*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗴𝗿𝘂𝗽𝗮𝗹𝗲𝘀
*» .enable antilink*

• 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀
*» .enable antilink2*

• 𝗠𝗼𝗱𝗼 𝗵𝗼𝘁
*» .enable modohorny*

• 𝗥𝗲𝗮𝗰𝗰𝗶𝗼𝗻 𝗰𝗼𝗻 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀
*» .enable stickers*

• 𝗦𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗺𝗲𝗻𝘁𝗲
*» .enable autolevelup*

• 𝗖𝗿𝗲𝗮𝗿 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗼𝘀 (𝘮𝘢𝘯𝘥𝘢𝘳 𝘪𝘮𝘢𝘨𝘦𝘯)
*» .enable autosticker*

• 𝙍𝙚𝙖𝙘𝙘𝙞𝙤𝙣 𝙚𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨
*» .enable reaction*

• 𝘼𝙣𝙩𝙞 𝙩𝙤𝙭𝙞𝙘𝙤𝙨
*» .enable antitoxic*

• 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙖𝙪𝙙𝙞𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩
*» .enable audios_*

• 𝘼𝙣𝙩𝙞 𝙣𝙪𝙢𝙚𝙧𝙤𝙨
*» .enable antifake*

• 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙨𝙪𝙗 𝙗𝙤𝙩𝙨 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩
*» .enable modejadibot*

• 𝘼𝙘𝙩𝙞𝙫𝙖𝙧 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨
*» .enable restrict*

• 𝙇𝙚𝙚𝙧 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨
*» .enable autoread*

• 𝙉𝙤 𝙡𝙡𝙖𝙢𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩
*» .enable antillamar*

• 𝙉𝙤 𝙝𝙖𝙘𝙚𝙧 𝙨𝙥𝙖𝙢 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩
*» .enable antispam*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙘𝙤𝙣𝙩𝙚𝙨𝙩𝙖𝙧𝙖 𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨
*» .enable modoadmin*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨
*» .enable pconly*

• 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙜𝙧𝙪𝙥𝙖𝙡𝙚𝙨
*» .enable gconly*

• 𝙉𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤
*» .enable antiprivado*

• 𝘾𝙝𝙖𝙩𝙜𝙥𝙩 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙤
*» .enable modoia*

𝗫𝗶𝗮𝗕𝗼𝘁-𝗣𝗿𝗼 🔮`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `❱❱ 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙓𝙄𝘼 ❰❰\n\n» 𝙊𝙋𝘾𝙄𝙊𝙉 | ${type}\n» 𝙀𝙎𝙏𝘼𝘿𝙊 | ${isEnable ? '𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖' : '𝘋𝘌𝘚𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖'}\n» 𝙋𝘼𝙍𝘼 | ${isAll ? '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛' : isUser ? '' : '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛'}`}, {quoted: fkontak});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;