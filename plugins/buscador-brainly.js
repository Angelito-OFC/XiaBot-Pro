import * as baileys from '@adiwajshing/baileys'
import { Brainly } from 'brainly-scraper-v2'
import fetch from 'node-fetch'
let brainly = new Brainly('id')

let handler = async (m, { conn, text }) => {
	if (!text) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘊𝘶𝘢𝘭 𝘦𝘴 𝘴𝘶 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢'
	let res = await brainly.search(text, 'id').catch(() => null)
	console.log(res)
	if (res) {
		let answer = res.map(({ question, answers }, i) => `
𝙋𝙧𝙚𝙜𝙪𝙣𝙩𝙖 ${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `
𝙍𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙥𝙖𝙧𝙖 ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content}${v.attachments.length > 0 ? `\n𝙐𝙧𝙡: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n' + '-'.repeat(45))
		m.reply(answer.trim())
	} else {
		let answer = await (await fetch(API('violetics', '/api/media/brainly', { query: text }, 'apikey'))).json()
		answer = answer.result
		if (!answer.length) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝘕𝘰 𝘴𝘦 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘢𝘳𝘰𝘯 𝘳𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰𝘴'
		for (let x = 0; x < answer.length; x++) {
			await m.reply(`*${answer[x].pertanyaan}*\n_${answer[x].source}_\n${answer[x].jawaban}`)
			await baileys.delay(2000)
		}
	}
}
handler.help = ['brainly']
handler.tags = ['tools']
handler.command = /^(brainly)$/i

export default handler