const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `🤖𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝘿𝙀𝙇 𝘽𝙊𝙏\n\n
🔮𝙊𝙥𝙘𝙞𝙤𝙣: ✨ | 𝘞𝘌𝘓𝘊𝘖𝘔𝘌
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘸𝘦𝘭𝘤𝘰𝘮𝘦
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘸𝘦𝘭𝘤𝘰𝘮𝘦
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🌎 | 𝘔𝘖𝘋𝘖 𝘗𝘜𝘉𝘓𝘐𝘊𝘖
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘱𝘶𝘣𝘭𝘪𝘤
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘱𝘶𝘣𝘭𝘪𝘤
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘣𝘰𝘵 𝘴𝘦 𝘷𝘶𝘦𝘭𝘷𝘦 𝘥𝘦 𝘶𝘴𝘰 𝘱𝘶𝘣𝘭𝘪𝘤𝘰 𝘺/𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔥 | 𝘔𝘖𝘋𝘖 𝘏𝘖𝘙𝘕𝘠
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘩𝘰𝘳𝘯𝘺
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 +18 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔗 | 𝘈𝘕𝘛𝘐𝘓𝘐𝘕𝘒
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘢𝘯𝘵𝘪-𝘦𝘯𝘭𝘢𝘤𝘦𝘴 𝘥𝘦 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪ó𝘯 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔗 | 𝘈𝘕𝘛𝘐𝘓𝘐𝘕𝘒 2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬2
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘢𝘯𝘵𝘪-𝘦𝘯𝘭𝘢𝘤𝘦𝘴 𝘲𝘶𝘦 𝘪𝘯𝘪𝘤𝘪𝘢𝘯 𝘦𝘯 𝘏𝘛𝘛𝘗𝘚.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪ó𝘯 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔎 | 𝘋𝘌𝘛𝘌𝘊𝘛
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘥𝘦𝘵𝘦𝘤𝘵
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘥𝘦𝘵𝘦𝘤𝘵
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘳𝘪𝘷𝘢 𝘭𝘢𝘴 𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘤𝘢𝘮𝘣𝘪𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔍 | 𝘋𝘌𝘛𝘌𝘊𝘛 2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘥𝘦𝘵𝘦𝘤𝘵2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘥𝘦𝘵𝘦𝘤𝘵2
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘋𝘦𝘵𝘦𝘤𝘵𝘢 𝘮𝘰𝘥𝘪𝘧𝘪𝘤𝘢𝘤𝘪𝘰𝘯𝘦𝘴 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘺 𝘮𝘢𝘯𝘵𝘪𝘦𝘯𝘦 𝘶𝘯𝘢 𝘮𝘦𝘫𝘰𝘳 𝘨𝘦𝘴𝘵𝘪𝘰𝘯.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: ❗ | 𝘙𝘌𝘚𝘛𝘙𝘐𝘊𝘛
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢𝘴 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦𝘭 𝘉𝘰𝘵, 𝘤𝘰𝘮𝘰 𝘭𝘢 𝘥𝘦 𝘴𝘢𝘤𝘢𝘳 𝘰 𝘢𝘨𝘳𝘦𝘨𝘢𝘳 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘢 𝘶𝘯 𝘨𝘳𝘶𝘱𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: ☑️ | 𝘈𝘜𝘛𝘖𝘙𝘌𝘈𝘋
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘶𝘵𝘰𝘳𝘦𝘢𝘥
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘶𝘵𝘰𝘳𝘦𝘢𝘥
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘔𝘢𝘳𝘤𝘢 𝘤𝘰𝘮𝘰 𝘭𝘦𝘪𝘥𝘰 𝘭𝘰𝘴 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘺 𝘭𝘰𝘴 𝘦𝘴𝘵𝘢𝘥𝘰𝘴 𝘢𝘶𝘵𝘰𝘮á𝘵𝘪𝘤𝘢𝘮𝘦𝘯𝘵𝘦.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔊 | 𝘈𝘜𝘋𝘐𝘖𝘚
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘶𝘥𝘪𝘰𝘴
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘶𝘥𝘪𝘰𝘴
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴 𝘴𝘪𝘯 𝘱𝘳𝘦𝘧𝘪𝘫𝘰𝘴, 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 👾 | 𝘈𝘜𝘛𝘖𝘚𝘛𝘐𝘊𝘒𝘌𝘙
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘶𝘵𝘰𝘴𝘵𝘪𝘤𝘬𝘦𝘳
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘶𝘵𝘰𝘴𝘵𝘪𝘤𝘬𝘦𝘳
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘛𝘰𝘥𝘢𝘴 𝘭𝘢𝘴 𝘪𝘮𝘢𝘨𝘦𝘯𝘦𝘴 𝘰 𝘷𝘪𝘥𝘦𝘰𝘴 𝘦𝘯𝘷𝘪𝘢𝘥𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘴𝘦 𝘤𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦𝘯 𝘦𝘯 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴.
 
--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 💬 | 𝘗𝘊𝘖𝘕𝘓𝘠
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘱𝘤𝘰𝘯𝘭𝘺
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘱𝘤𝘰𝘯𝘭𝘺
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘉𝘰𝘵 𝘴𝘰𝘭𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳á 𝘢 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘴𝘪 𝘦𝘴 𝘶𝘯 𝘤𝘩𝘢𝘵 𝘱𝘳𝘪𝘷𝘢𝘥𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵. 

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🏢 | 𝘎𝘊𝘖𝘕𝘓𝘠
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘨𝘤𝘰𝘯𝘭𝘺
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘨𝘤𝘰𝘯𝘭𝘺
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘉𝘰𝘵 𝘴𝘰𝘭𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳𝘢 𝘢 𝘭𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘴𝘪 𝘦𝘴 𝘶𝘯 𝘨𝘳𝘶𝘱𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: ❌ | 𝘈𝘕𝘛𝘐𝘝𝘐𝘌𝘞𝘖𝘕𝘊𝘌
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘷𝘪𝘦𝘸𝘰𝘯𝘤𝘦
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘷𝘪𝘦𝘸𝘰𝘯𝘤𝘦
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘓𝘢𝘴 𝘪𝘮𝘢𝘨𝘦𝘯𝘦𝘴 𝘦𝘯𝘷𝘪𝘢𝘥𝘢𝘴 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘴𝘰𝘭𝘰 𝘶𝘯𝘢 𝘷𝘦𝘻, 𝘴𝘰𝘯 𝘳𝘦𝘦𝘯𝘷𝘪𝘢𝘥𝘢𝘴 𝘯𝘰𝘳𝘮𝘢𝘭 𝘱𝘰𝘳 𝘦𝘭 𝘉𝘰𝘵. 

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 📵 | 𝘈𝘕𝘛𝘐𝘓𝘓𝘈𝘔𝘈𝘋𝘈𝘚
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘤𝘢𝘭𝘭
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘤𝘢𝘭𝘭
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘉𝘰𝘵 𝘣𝘭𝘰𝘲𝘶𝘦𝘳á 𝘢 𝘭𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘲𝘶𝘦 𝘭𝘭𝘢𝘮𝘦𝘯 𝘢𝘭 𝘉𝘰𝘵.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘰𝘥𝘳𝘢 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘰𝘸𝘯𝘦𝘳𝘴 𝘥𝘦𝘭 𝘉𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🤬 | 𝘈𝘕𝘛𝘐𝘛𝘖𝘟𝘐𝘊
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘵𝘰𝘹𝘪𝘤
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘵𝘰𝘹𝘪𝘤
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘋𝘦𝘵𝘦𝘤𝘵𝘢 𝘭𝘢 𝘮𝘢𝘭𝘢𝘴 𝘱𝘢𝘭𝘢𝘣𝘳𝘢𝘴 𝘺 𝘢𝘥𝘷𝘪𝘦𝘳𝘵𝘦 𝘢𝘭 𝘱𝘢𝘳𝘵𝘪𝘤𝘪𝘱𝘢𝘯𝘵𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰, 𝘢𝘯𝘵𝘦𝘴 𝘥𝘦 𝘴𝘦𝘳 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪ó𝘯 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🕸️ | 𝘈𝘕𝘛𝘐𝘛𝘙𝘈𝘉𝘈𝘚
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘵𝘳𝘢𝘣𝘢
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘵𝘳𝘢𝘣𝘢
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘉𝘰𝘵 𝘥𝘦𝘵𝘦𝘤𝘵𝘢 𝘵𝘦𝘹𝘵𝘰𝘴 𝘭𝘢𝘳𝘨𝘰𝘴 𝘲𝘶𝘦 𝘱𝘰𝘥𝘳𝘪𝘢𝘯 𝘴𝘦𝘳 𝘷𝘪𝘳𝘶𝘴 𝘺 𝘤𝘢𝘶𝘴𝘢𝘳 𝘭𝘢𝘨 𝘦𝘯 𝘦𝘭 𝘤𝘩𝘢𝘵 𝘺 𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘢𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪ó𝘯 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 👎 | 𝘈𝘕𝘛𝘐𝘈𝘙𝘈𝘉𝘌𝘚
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘚𝘪 𝘶𝘯 𝘯𝘶𝘮𝘦𝘳𝘰 á𝘳𝘢𝘣𝘦 𝘴𝘦 𝘶𝘯é 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰, 𝘦𝘭 𝘉𝘰𝘵 𝘭𝘰 𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘢𝘶𝘵𝘰𝘮𝘢𝘵𝘪𝘤𝘢𝘮𝘦𝘯𝘵𝘦.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘰 𝘦𝘭 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘺 𝘦𝘭 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 👎 | 𝘈𝘕𝘛𝘐𝘈𝘙𝘈𝘉𝘌𝘚 2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴2
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘢𝘳𝘢𝘣𝘦𝘴2
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘚𝘪 𝘶𝘯 𝘯𝘶𝘮𝘦𝘳𝘰 á𝘳𝘢𝘣𝘦 𝘴𝘦 𝘶𝘯é 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰, 𝘦𝘭 𝘉𝘰𝘵 𝘭𝘰 𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘢𝘶𝘵𝘰𝘮𝘢𝘵𝘪𝘤𝘢𝘮𝘦𝘯𝘵𝘦.
🔮𝙉𝙤𝙩𝙖: 𝘚𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢 𝘵𝘦𝘯𝘦𝘳 𝘢𝘤𝘵𝘪𝘷𝘢 𝘭𝘢 𝘧𝘶𝘯𝘤𝘪ó𝘯 𝘳𝘦𝘴𝘵𝘳𝘪𝘤𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 👑 | 𝘔𝘖𝘋𝘖𝘈𝘋𝘔𝘐𝘕
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘣𝘰𝘵 𝘴𝘰𝘭𝘰 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳á 𝘢 𝘭𝘰𝘴 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘦𝘯𝘷𝘪𝘢𝘥𝘰𝘴 𝘱𝘰𝘳 𝘭𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘴. 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 😃 | 𝘚𝘐𝘔𝘚𝘐𝘔𝘐
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘴𝘪𝘮𝘴𝘪𝘮𝘪
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘴𝘪𝘮𝘴𝘪𝘮𝘪
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘣𝘰𝘵 𝘦𝘮𝘱𝘦𝘻𝘢𝘳á 𝘢 𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳 𝘢 𝘭𝘰𝘴 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘶𝘴𝘢𝘯𝘥𝘰 𝘭𝘢 𝘐𝘈 𝘥𝘦 𝘚𝘪𝘮𝘚𝘪𝘮𝘪.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🛡️ | 𝘈𝘕𝘛𝘐𝘋𝘌𝘓𝘌𝘛𝘌
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘥𝘦𝘭𝘦𝘵𝘦
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘥𝘦𝘭𝘦𝘵𝘦
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘣𝘰𝘵 𝘥𝘦𝘵𝘦𝘤𝘵𝘢 𝘤𝘶𝘢𝘯𝘥𝘰 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘺 𝘭𝘰 𝘳𝘦𝘦𝘯𝘷í𝘢. 

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🔊 | 𝘈𝘜𝘋𝘐𝘖𝘚-𝘉𝘖𝘛
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘶𝘥𝘪𝘰𝘴_𝘣𝘰𝘵
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘶𝘥𝘪𝘰𝘴_𝘣𝘰𝘵
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘚𝘦 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘯 𝘭𝘰𝘴 𝘢𝘶𝘥𝘪𝘰𝘴 𝘥𝘦𝘭 𝘉𝘰𝘵 𝘥𝘦𝘭 𝘮𝘦𝘯𝘶𝘢𝘶𝘥𝘪𝘰𝘴 𝘱𝘢𝘳𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴 𝘱𝘳𝘪𝘷𝘢𝘥𝘰𝘴.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🤖 | 𝘔𝘖𝘋𝘖𝘐𝘈
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘪𝘢
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘰𝘪𝘢
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘚𝘦 𝘢𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘮𝘰𝘥𝘰 "𝘐𝘯𝘵𝘦𝘭𝘪𝘨𝘦𝘯𝘤𝘪𝘢 𝘈𝘳𝘵𝘪𝘧𝘪𝘤𝘪𝘢𝘭" 𝘤𝘰𝘯 𝘊𝘩𝘢𝘵𝘎𝘗𝘛 𝘦𝘯 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴 𝘱𝘳𝘪𝘷𝘢𝘥𝘰𝘴.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: ⏳ | 𝘈𝘕𝘛𝘐𝘚𝘗𝘈𝘔
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘴𝘱𝘢𝘮
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘴𝘱𝘢𝘮
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘌𝘭 𝘉𝘰𝘵 𝘥𝘦𝘵𝘦𝘤𝘵𝘢 𝘤𝘶𝘢𝘯𝘥𝘰 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘩𝘢𝘤𝘦 𝘴𝘱𝘢𝘮 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘺 𝘭𝘰 𝘣𝘢𝘯𝘦𝘢 𝘱𝘰𝘳 5 𝘴𝘦𝘨𝘶𝘯𝘥𝘰𝘴 𝘺 𝘭𝘰 𝘢𝘥𝘷𝘪𝘦𝘳𝘵𝘦.
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵. 

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 🤖 | 𝘔𝘖𝘋𝘌𝘑𝘈𝘋𝘐𝘉𝘖𝘛
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘦𝘫𝘢𝘥𝘪𝘣𝘰𝘵
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘮𝘰𝘥𝘦𝘫𝘢𝘥𝘪𝘣𝘰𝘵
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣: 𝘈𝘤𝘵𝘪𝘷𝘢 𝘰 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘶𝘴𝘰 𝘥𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘱𝘢𝘳𝘢 𝘴𝘶𝘣 𝘣𝘰𝘵𝘴 .𝘴𝘦𝘳𝘣𝘰𝘵 / .𝘫𝘢𝘥𝘪𝘣𝘰𝘵
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.

--------------------------------

🔮𝙊𝙥𝙘𝙞𝙤𝙣: 💬 | 𝘈𝘕𝘛𝘐𝘗𝘙𝘐𝘝𝘈𝘋𝘖
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙣: .𝘦𝘯𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘱𝘳𝘪𝘷𝘢𝘥𝘰
🔮𝘾𝙤𝙢𝙖𝙣𝙙𝙤-𝙤𝙛𝙛: .𝘥𝘪𝘴𝘢𝘣𝘭𝘦 𝘢𝘯𝘵𝘪𝘱𝘳𝘪𝘷𝘢𝘥𝘰
🔮𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣:𝘌𝘭 𝘉𝘰𝘵 𝘣𝘭𝘰𝘲𝘶𝘦𝘳á 𝘢 𝘭𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘲𝘶𝘦 𝘦𝘴𝘤𝘳𝘪𝘣𝘢𝘯 𝘢𝘭 𝘱𝘳𝘪𝘷𝘢𝘥𝘰 𝘥𝘦𝘭 𝘉𝘰𝘵. 
🔮𝙉𝙤𝙩𝙖: 𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘦𝘭/𝘭𝘰𝘴 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰(𝘴) 𝘥𝘦𝘭 𝘣𝘰𝘵.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🔮 𝙊𝙋𝘾𝙄𝙊𝙉: ${type}\n🔮 𝙀𝙎𝙏𝘼𝘿𝙊: ${isEnable ? '𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖' : '𝘋𝘌𝘚𝘈𝘊𝘛𝘐𝘝𝘈𝘋𝘖'}\n🔮 𝙋𝘼𝙍𝘼: ${isAll ? '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛' : isUser ? '' : '𝘌𝘚𝘛𝘌 𝘊𝘏𝘈𝘛'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;