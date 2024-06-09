import { URL_REGEX } from '@whiskeysockets/baileys'
import { fileTypeFromBuffer } from 'file-type'
import { Pixiv } from '@ibaraki-douji/pixivts'
const pixiv = new Pixiv()

let handler = async (m, { conn, text }) => {
	if (!text) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘱𝘪𝘹𝘪𝘷 <𝘭𝘪𝘯𝘬>'
	let res = await pixivDl(text)
	await m.reply(wait)
	for (let i = 0; i < res.media.length; i++) {
		let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
		let mime = (await fileTypeFromBuffer(res.media[i])).mime 
		await conn.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
	}
}
handler.help = handler.alias = ['pixiv']
handler.tags = ['downloader']
handler.command = /^(pixiv)$/i
handler.limit = true
export default handler

async function pixivDl(query) {
	if (query.match(URL_REGEX)) {
		if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
		query = query.replace(/\D/g, '')
		let res = await pixiv.getIllustByID(query).catch(() => null)
		if (!res) throw `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙀𝙧𝙧𝙤𝙧\n\n» 𝘉𝘶𝘴𝘲𝘶𝘦𝘥𝘢 "${query}" 𝘯𝘰 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘢𝘥𝘢`
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	} else {
		let res = await pixiv.getIllustsByTag(query)
		if (!res.length) throw `Pencarian "${query}" Tidak Di Temukan`
		res = res[~~(Math.random() * res.length)].id
		res = await pixiv.getIllustByID(res)
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	}
}