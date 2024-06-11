import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "> 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝘈𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n> 𝙑𝙚𝙧𝙨𝙞𝙤𝙣:  _3.3.1_\n> 𝙄𝙜: @𝘶𝘴𝘹𝘳_𝘢𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n> 𝙒𝙖: wa.me/59897246324\n> 𝘚𝘪 𝘩𝘢𝘺 𝘢𝘭𝘨𝘶𝘯 𝘦𝘳𝘳𝘰𝘳 𝘳𝘦𝘱𝘰𝘳𝘵𝘦𝘭𝘰 𝘢𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 #𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝘱𝘢𝘳𝘢 𝘴𝘰𝘭𝘶𝘤𝘪𝘰𝘯𝘢𝘳𝘭𝘰\n\n> GRACIAS 🫶🏻"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "🔮 𝙃𝙤𝙡𝙖 𝙨𝙤𝙮 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".allmenu\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuff\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuaudios\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".labiblia\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuanime\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menujuegos\",\"id\":\"message\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(menu|help|ayuda)$/i

export default handler