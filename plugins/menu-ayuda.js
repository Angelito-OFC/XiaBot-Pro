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
            text: "🔮 𝘚𝘪 𝘩𝘢𝘺 𝘢𝘭𝘨𝘶𝘯 𝘦𝘳𝘳𝘰𝘳 𝘳𝘦𝘱𝘰𝘳𝘵𝘦𝘭𝘰 𝘢𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 #𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝘱𝘢𝘳𝘢 𝘴𝘰𝘭𝘶𝘤𝘪𝘰𝘯𝘢𝘳𝘭𝘰\n\n𝘚𝘪 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘯𝘰 𝘵𝘦 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘢𝘳𝘢
𝘱𝘳𝘶𝘦𝘣𝘢 𝘤𝘰𝘯 #𝘢𝘭𝘭𝘮𝘦𝘯𝘶\n\n¡𝙂𝙧𝙖𝙘𝙞𝙖𝙨! 🔮"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝘈𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n𝙑𝙚𝙧𝙨𝙞𝙤𝙣:  _3.3.1_\n𝙄𝙜: @𝘶𝘴𝘹𝘳_𝘢𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n𝙒𝙖: wa.me/59897246324"
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
                "buttonParamsJson": "{\"display_text\":\".menu\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuff\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuowner\",\"id\":\"message\"}"
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
handler.command = /^(help|ayuda)$/i

export default handler