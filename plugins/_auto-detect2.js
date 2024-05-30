// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

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
    let txt1 = `*Recientemente se ha incorporado al grupo un nuevo miembro.*\n\n`;
    txt1 += `*◦  Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt1 += `*◦  Se añadió a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt1 += `*◦  Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt1 += `*◦  Se añadió:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt2 = `*Recientemente se ha eliminado un miembro del grupo.*\n\n`;
    txt2 += `*◦  Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt2 += `*◦  Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt2 += `*◦  Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt2 += `*◦  Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt2, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido';
    } else {
      ax = 'eliminado';
    }
    let txt3 = `*Recientemente se ha ${ax} un miembro del grupo.*\n\n`;
    txt3 += `*◦  Grupo:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt3 += `*◦  Se eliminoó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  Se salió:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */