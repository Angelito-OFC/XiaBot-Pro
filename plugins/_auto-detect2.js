// Creditos del codigo a @usxr_angelito //

/* GitHub: https://github.com/karim-off*/

/* Bot: https://github.com/karim-off/XiaBot-Pro*/

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = imagen1;
  const img = imagen4;
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 27) {
    let txt1 = `𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙎𝙀 𝙐𝙉𝙄𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙐𝙉 𝙉𝙐𝙀𝙑𝙊 𝙈𝙄𝙀𝙈𝘽𝙍𝙊.\n\n`;
    txt1 += `» 𝙂𝙍𝙐𝙋𝙊: _${groupName}_\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt1 += `» 𝙎𝙀 𝙐𝙉𝙄𝙊: _@${m.messageStubParameters[0].split`@`[0]}_\n`;
      txt1 += `» 𝙀𝙅𝙀𝘾𝙐𝙏𝘼𝘿𝙊 𝙋𝙊𝙍: _@${m.sender.split`@`[0]}_`;
    } else {
      txt1 += `» 𝙎𝙀 𝙐𝙉𝙄𝙊: _@${m.messageStubParameters[0].split`@`[0]}_\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt2 = `𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙎𝙀 𝙃𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙐𝙉 𝙈𝙄𝙀𝙈𝘽𝙍𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊.\n\n`;
    txt2 += `» 𝙂𝙍𝙐𝙋𝙊: _${groupName}_\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt2 += `» 𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙊 𝘼: _@${m.messageStubParameters[0].split`@`[0]}_\n`;
      txt2 += `» 𝙀𝙅𝙀𝘾𝙐𝙏𝘼𝘿𝙊 𝙋𝙊𝙍: _@${m.sender.split`@`[0]}_`;
    } else {
      txt2 += `» 𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙊 𝘼: _@${m.messageStubParameters[0].split`@`[0]}_\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = '𝙎𝘼𝙇𝙄𝘿𝙊';
    } else {
      ax = '𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊';
    }
    let txt3 = `𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙎𝙀 𝙃𝘼 ${ax} 𝙐𝙉 𝙈𝙄𝙀𝙈𝘽𝙍𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊.\n\n`;
    txt3 += `» 𝙂𝙍𝙐𝙋𝙊: _${groupName}_\n`;
    if (ax === 'eliminado') {
      txt3 += `» 𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙊 𝘼: _@${m.messageStubParameters[0].split`@`[0]}_\n`;
      txt3 += `» 𝙀𝙅𝙀𝘾𝙐𝙏𝘼𝘿𝙊 𝙋𝙊𝙍: _@${m.sender.split`@`[0]}_`;
    } else {
      txt3 += `» 𝙎𝙀 𝙎𝘼𝙇𝙄𝙊:  _@${m.messageStubParameters[0].split`@`[0]}_\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */