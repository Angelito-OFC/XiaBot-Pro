const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
‎ ‎ ‎ ‎ ‎ ‎ ❱❱ 𝘼  𝙑  𝙄  𝙎  𝙊 ❰❰

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙀𝙧𝙧𝙤𝙣𝙚𝙤.

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙤: 

_${usedPrefix + command} abrir_
_${usedPrefix + command} cerrar_
`.trim();
  }
const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('» 𝙂𝙧𝙪𝙥𝙤 𝘾𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
