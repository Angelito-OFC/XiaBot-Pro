let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
    if (!event) return await conn.reply(m.chat, `❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n🔮 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘴𝘪𝘮𝘶𝘭𝘢𝘳 <𝘸𝘦𝘭𝘤𝘰𝘮𝘦 @𝘶𝘴𝘦𝘳>\n\n𝙇𝙞𝙨𝙩𝙖𝙨 𝙙𝙚 𝙨𝙞𝙢𝙪𝙡𝙖𝙘𝙞𝙤𝙣𝙚𝙨:\n${usedPrefix + command} welcome @user
${usedPrefix + command} bye @user
${usedPrefix + command} promote @user
${usedPrefix + command} demote @user`.trim(), m, null, [['Welcome', '#simular welcome'], ['Bye', '#simular bye']])
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let part = who.length ? who : [m.sender]
    let act = false
    m.reply(`*${htjava} Simulating ${event}...*`)
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
            act = 'add'
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
            act = 'remove'
            break
        case 'promote':
            act = 'promote'
            break
        case 'demote':
            act = 'demote'
            break
        default:
            throw eror
    }
    if (act) return conn.participantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
}
handler.help = ['simular <event> [@mention]']
handler.tags = ['owner']
handler.rowner = true

handler.command = /^(simular|simulasi)$/i
export default handler