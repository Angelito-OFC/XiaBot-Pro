/*
ð™†ð™®ð™¯ð™ð™®ð™¯ð™¯ ð™“ð˜¿ 
ð˜¸ð˜¢: wa.me/6287815560235
ð˜µð˜¦ð˜­ð˜¦: t.me/kyzoffc
ð˜¸ð˜¦ð˜£: s.id/kyzzxd
ðŸš¨Di Larang Menghapus Wm IniðŸš¨
*/

import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    let input = `[â—] *Masukan Salah*
	
Contoh : ${usedPrefix + command} https://vt.tiktok.com/ZSFSqcuXb/`
    if (!text) return m.reply(input)
    conn.sendMessage(m.chat, {
        react: {
            text: 'â±ï¸',
            key: m.key
        }
    })
    try {
        const data = await tiktok(text)
        let stats = data.stats
        if (data.video) {
            let cap = `${data.title}

â¤: ${stats.likeCount}
ðŸ”: ${stats.shareCount}
â–¶ï¸: ${stats.playCount}
ðŸ’¬: ${stats.commentCount}
ðŸ“©: ${stats.saveCount}`
            conn.sendFile(m.chat, data.video.noWatermark, '', cap, m)
            await conn.sendMessage(m.chat, {
                react: {
                    text: 'âœ…',
                    key: m.key
                }
            })
        } else if (data.images) {
            let caption = `${data.title}

â¤: ${stats.likeCount}
ðŸ”: ${stats.shareCount}
â–¶ï¸: ${stats.playCount}
ðŸ’¬: ${stats.commentCount}
ðŸ“©: ${stats.saveCount}`
            for (let result of data.images) {
                conn.sendMessage(m.sender, {
                    image: {
                        url: result.url
                    },
                    caption: caption
                }, {
                    quoted: m
                })
            }
            conn.sendMessage(m.chat, {
                react: {
                    text: 'âœ…',
                    key: m.key
                }
            })
        }
    } catch (e) {
        throw eror
    }
}

handler.help = ['tiktok <link>']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl)$/i
handler.limit = true
handler.register = true

export default handler

async function tiktok(url) {
    const ngaji = await axios.get('https://api.tiklydown.eu.org/api/download?url=' +
        encodeURIComponent(url)
    )
    return ngaji.data
}