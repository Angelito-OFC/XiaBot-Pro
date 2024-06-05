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
    body: { text: `-›🧸 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦 𝗢𝗕𝗧𝗘𝗡𝗜𝗗𝗢𝗦: ${results.videos.length}\n-›🧸 𝗩𝗜𝗗𝗘𝗢 𝗔𝗟𝗘𝗔𝗧𝗢𝗥𝗜𝗢:\n-›🧸 𝗧𝗜𝗧𝗨𝗟𝗢: ${randomVideo.title}\n-›🧸 𝗔𝗨𝗧𝗢𝗥: ${randomVideo.author.name}\n-›🧸 𝗩𝗜𝗦𝗜𝗧𝗔𝗦: ${randomVideo.views}\n-›🧸 𝗨𝗥𝗟: ${randomVideo.url}\n-›🧸𝗜𝗠𝗔𝗚𝗘𝗡: ${randomVideo.thumbnail}`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*⛩️  𝘠  𝘖  𝘜  𝘛  𝘜  𝘉  𝘌    𝘚  𝘌  𝘈  𝘙  𝘊  𝘏  ⛩️*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'OPCIONES DISPONIBLES',
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