// by Angelito

import axios from 'axios';

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘪𝘨𝘧𝘰𝘵𝘰 <𝘭𝘪𝘯𝘬>`;
  const req = await igeh(text);
  const { url_list } = req;
  const sender = m.sender.split('@')[0];
  const message = `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘍𝘰𝘵𝘰 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘥𝘢 𝘦𝘹𝘪𝘵𝘰𝘴𝘢𝘮𝘦𝘯𝘵𝘦, 𝘴𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘥𝘦\n» ${sender}`;
  
  if (url_list.length > 1) {
    const media = [];
    for (let i = 0; i < url_list.length; i++) {
      const url = url_list[i];
      const file = await getBuffer(url);
      media.push({ url, file });
    }
    
    const multiMediaMessage = {
      content: { text: message, contextInfo: { mentionedJid: [sender + "@s.whatsapp.net"] } },
      multiMedia: media
    };
    
    return conn.sendMessage(m.chat, multiMediaMessage, 'mediaMessage');
  } else {
    const file = await getBuffer(url_list[0]);
    
    const imageMessage = {
      image: { url: url_list[0], file },
      caption: message
    };
    
    return conn.sendMessage(m.chat, imageMessage, 'imageMessage', { quoted: m });
  }
};

handler.help = ['igphoto'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(igphotos|igfoto)$/i;

export default handler;

async function igeh(url) {
  const BASE_URL = "https://instasupersave.com/";
  const resp = await axios.get(BASE_URL);
  const cookie = resp.headers["set-cookie"];
  const session = cookie[0].split(";")[0].replace("XSRF-TOKEN=", "").replace("%3D", "");
  
  const config = {
    method: 'post',
    url: `${BASE_URL}api/convert`,
    headers: {
      'origin': 'https://instasupersave.com',
      'referer': 'https://instasupersave.com/en/instagram-photo/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52',
      'x-xsrf-token': session,
      'Content-Type': 'application/json',
      'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`
    },
    data: {
      url: url
    }
  };
  
  const response = await axios(config);
  const ig = Array.isArray(response.data)
    ? response.data.map(post => post.sd === undefined ? post.thumb : post.sd.url)
    : [response.data.url[0].url];

  return {
    results_number: ig.length,
    url_list: ig
  };
}

async function getBuffer(url) {
  const res = await axios.get(url, { responseType: 'arraybuffer' });
  return res.data;
}