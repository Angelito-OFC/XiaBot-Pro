const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘭 𝘰𝘸𝘯𝘦𝘳 𝘥𝘦𝘭 𝘣𝘰𝘵 𝘵𝘪𝘦𝘯𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘥𝘰 𝘦𝘭 𝘦𝘯𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵/ 𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵';
  if (!args[0]) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘐𝘯𝘨𝘳𝘦𝘴𝘦 𝘦𝘭 𝘯𝘶𝘮𝘦𝘳𝘰 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘳 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘕𝘰 𝘱𝘶𝘥𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘳 𝘢 @${jid.split('@')[0]}, 𝘦𝘴𝘵𝘦 𝘯𝘶𝘮𝘦𝘳𝘰 𝘦𝘴𝘵𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘱𝘰𝘳 𝘲𝘶𝘦 𝘦𝘴 𝘦𝘳𝘳𝘰𝘯𝘦𝘰 𝘰 𝘺𝘢 𝘤𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘥𝘰 𝘴𝘶 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘢𝘭𝘰 𝘤𝘶𝘢𝘭 𝘭𝘦 𝘦𝘯𝘷𝘪𝘦 𝘭𝘢 𝘪𝘯𝘷𝘪𝘵𝘢𝘤𝘪𝘰𝘯 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘢 𝘴𝘶 𝘱𝘳𝘪𝘷𝘢𝘥𝘰`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `𝘏𝘦𝘺!! 𝘏𝘰𝘭𝘢, 𝘮𝘦 𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘰, 𝘴𝘰𝘺 𝘟𝘪𝘢𝘉𝘰𝘵-𝘗𝘳𝘰, 𝘺 𝘴𝘰𝘺 𝘶𝘯 𝘉𝘰𝘵 𝘱𝘢𝘳𝘢 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱, 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘶𝘵𝘪𝘭𝘪𝘻𝘰 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘱𝘢𝘳𝘢 𝘶𝘯𝘪𝘳𝘵𝘦 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰, 𝘱𝘦𝘳𝘰 𝘯𝘰 𝘱𝘶𝘥𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘳𝘵𝘦, 𝘢𝘴𝘪 𝘲𝘶𝘦 𝘵𝘦 𝘮𝘢𝘯𝘥𝘰 𝘭𝘢 𝘪𝘯𝘷𝘪𝘵𝘢𝘤𝘪𝘰𝘯 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘵𝘦 𝘢𝘨𝘳𝘦𝘨𝘶𝘦𝘴, 𝘵𝘦 𝘦𝘴𝘱𝘦𝘳𝘢𝘮𝘰𝘴!!`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘕𝘰 𝘱𝘶𝘥𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘳 𝘢 𝘦𝘴𝘵𝘦 𝘯𝘶𝘮𝘦𝘳𝘰 𝘦𝘴𝘵𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘱𝘰𝘳 𝘲𝘶𝘦 𝘦𝘴 𝘦𝘳𝘳𝘰𝘯𝘦𝘰 𝘰 𝘺𝘢 𝘤𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘥𝘰 𝘴𝘶 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘢𝘭𝘰 𝘤𝘶𝘢𝘭 𝘭𝘦 𝘦𝘯𝘷𝘪𝘦 𝘭𝘢 𝘪𝘯𝘷𝘪𝘵𝘢𝘤𝘪𝘰𝘯 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘢 𝘴𝘶 𝘱𝘳𝘪𝘷𝘢𝘥𝘰';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
