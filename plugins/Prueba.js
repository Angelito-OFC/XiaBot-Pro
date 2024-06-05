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
•🔮 wa.me/59897246324\n•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷\n•🔮𝙁𝙀𝘾𝙃𝘼: \n•🔮𝙉𝙄𝙑𝙀𝙇: \n•🔮𝙀𝙓𝙋: \n•🔮𝙍𝘼𝙉𝙂𝙊: \n•🔮𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎: \n•🔮𝙓𝙄𝘼𝘾𝙊𝙄𝙉𝙎:\n•🔮𝙏𝙊𝙆𝙀𝙉𝙎:\n•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏:`.trim() },
    footer: { text: `${global.wm}`.trim() },  
      header: {
          title: `*🔮 ＨＥＬＰ  ＭＥＮＵ 🔮*\n`,
          hasMediaAttachment: true,
          imageMessage: messa.imageMessage,
      },
    nativeFlowMessage: {
      buttons: [
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'MENUS XIA',
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