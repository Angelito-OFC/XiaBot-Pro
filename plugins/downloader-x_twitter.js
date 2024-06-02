import axios from 'axios';
let enviando = false;
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤.\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘹 <𝘭𝘪𝘯𝘬>`;
if (enviando) return;
    enviando = true;
try {
   await conn.sendMessage(m.chat, {text: global.wait}, {quoted: m}); 
   const res = await TwitterDL(text);
 if (res?.result.type == 'video') {
     const caption = res?.result.caption ? res.result.caption : '𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙄𝙈𝘼𝙂𝙀𝙉🔮';
     for (let i = 0; i < res.result.media.length; i++) {
     await conn.sendMessage(m.chat, {video: {url: res.result.media[i].result[0].url}, caption: caption}, {quoted: m});
     };
     enviando = false;
     return;
 } else if (res?.result.type == 'photo') {
     const caption = res?.result.caption ? res.result.caption : '𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐 𝙄𝙈𝘼𝙂𝙀𝙉 🔮';
     for (let i = 0; i < res.result.media.length; i++) {
     await conn.sendMessage(m.chat, {image: {url: res.result.media[i].url}, caption: caption}, {quoted: m});
     };
     enviando = false;
     return;
  }
} catch {
    enviando = false;
    throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘌𝘳𝘳𝘰𝘳 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘷𝘶𝘦𝘭𝘷𝘢 𝘢 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘳𝘭𝘰';
    return;
  }
};    
handler.command = /^((x|xdl|dlx|twdl|tw|twt|twitter)(dl)?)$/i;
export default handler;

const _twitterapi = (id) => `https://info.tweeload.site/status/${id}.json`;
const getAuthorization = async () => {
    const { data } = await axios.default.get("https://pastebin.com/raw/SnCfd4ru");
    return data;
};
const TwitterDL = async (url) => {
  return new Promise(async (resolve, reject) => {
    const id = url.match(/\/([\d]+)/);
    if (!id)
      return resolve({
        status: "error",
        message:
          "There was an error getting twitter id. Make sure your twitter url is correct!",
      });
      const response = await axios.default(_twitterapi(id[1]), {
        method: "GET",
        headers: {
          Authorization: await getAuthorization(),
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
        },
      });

      if (response.data.code !== 200) {
        return resolve({
          status: "error",
          message: "An error occurred while sending the request.",
        });
      }

      const author = {
        id: response.data.tweet.author.id,
        name: response.data.tweet.author.name,
        username: response.data.tweet.author.screen_name,
        avatar_url: response.data.tweet.author.avatar_url,
        banner_url: response.data.tweet.author.banner_url,
      };

      let media = [];
      let type;

      if (response.data.tweet?.media?.videos) {
        type = "video";
        response.data.tweet.media.videos.forEach((v) => {
          const resultVideo = [];
          v.video_urls.forEach((z) => {
            resultVideo.push({
              bitrate: z.bitrate,
              content_type: z.content_type,
              resolution: z.url.match(/([\d ]{2,5}[x][\d ]{2,5})/)[0],
              url: z.url,
            });
          });
          if (resultVideo.length !== 0) {
            media.push({
              type: v.type,
              duration: v.duration,
              thumbnail_url: v.thumbnail_url,
              result: v.type === "video" ? resultVideo : v.url,
            });
          }
        });
      } else {
        type = "photo";
        response.data.tweet.media.photos.forEach((v) => {
          media.push(v);
        });
      }

      resolve({
        status: "success",
        result: {
          id: response.data.tweet.id,
          caption: response.data.tweet.text,
          created_at: response.data.tweet.created_at,
          created_timestamp: response.data.tweet.created_timestamp,
          replies: response.data.tweet.replies,
          retweets: response.data.tweet.retweets,
          likes: response.data.tweet.likes,
          url: response.data.tweet.url,
          possibly_sensitive: response.data.tweet.possibly_sensitive,
          author,
          type,
          media: media.length !== 0 ? media : null,
        },
      });
  });
};