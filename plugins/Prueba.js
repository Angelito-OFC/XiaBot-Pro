/*

- Agradecimiento a la comunidad de "WSApp • Developers"
 * https://chat.whatsapp.com/FaQunmlp9BmDRk6lEEc9FJ
- Agradecimiento especial a Carlos (PT) por los codigos de interactiveMessage (botones)
- Agradecimiento a Darlyn1234 por la estructura de uso en este codigo y quoted
 * https://github.com/darlyn1234
- Adaptacion de imagen en tipo lista, codigo y funcionamiento por BrunoSobrino
 * https://github.com/BrunoSobrino

*/
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const datas = global;
    const device = await getDevice(m.key.id);

  if (!text) throw `⚠️ *Error*`;

  if (device !== 'desktop' || device !== 'web') {      

  const results = await yts(text);
  const videos = results.videos.slice(0, 20);
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  var messa = await prepareWAMessageMedia({ image: {url: randomVideo.thumbnail}}, { upload: conn.waUploadToServer })
  const interactiveMessage = {
    body: { text: `•🔮𝘾𝙍𝙀𝘼𝘿𝙊𝙍 
•🔮 wa.me/59897246324
•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
•🔮𝙁𝙀𝘾𝙃𝘼: ${date}
•🔮𝙉𝙄𝙑𝙀𝙇: ${level}
•🔮𝙀𝙓𝙋: ${exp} 
•🔮𝙍𝘼𝙉𝙂𝙊: ${role} 
•🔮𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎: ${limit}
•🔮𝙓𝙄𝘼𝘾𝙊𝙄𝙉𝙎: ${money}
•🔮𝙏𝙊𝙆𝙀𝙉𝙎: ${joincount}
•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*🔮 ＨＥＬＰ ＭＥＮＵ 🔮*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'MENUS DISPONIBLES',
            sections: videos.map((video) => ({
              title: video.title,
              rows: [
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'Descargar MP3',
                  id: `${prefijo}ytmp3 ${video.url}`
                },
                {
                  header: video.title,
                  title: video.author.name,
                  description: 'Descargar MP4',
                  id: `${prefijo}ytmp4 ${video.url}`
                }
              ]
            }))
          })
        }
      ],
      messageParamsJson: ''
    }
  };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

  } else {
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 𝙐𝙍𝙇 ${v.url}
↳ 🕒 𝘿𝙐𝙍𝘼𝘾𝙄𝙊́𝙉 ${v.timestamp}
↳ 📥 𝙁𝙀𝘾𝙃𝘼 ${v.ago}
↳ 👁 𝙑𝙄𝙎𝙄𝙏𝘼𝙎 ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);      
  }    
};
handler.help = ['ytsearch <texto>'];
handler.tags = ['search'];
handler.command = /^(playlist|yts|searchyt|buscaryt|videosearch|audiosearch)$/i;
export default handler;