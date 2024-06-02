const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
  const pesan = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!pesan) throw '❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰*\n\n𝘐𝘯𝘨𝘳𝘦𝘴𝘦 𝘦𝘭 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘲𝘶𝘦 𝘲𝘶𝘪𝘦𝘳𝘦 𝘲𝘶𝘦 𝘵𝘳𝘢𝘮𝘪𝘵𝘦 𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴';
  // m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 ${anu.length} 𝙂𝙧𝙪𝙥𝙤𝙨\n\n𝙉𝙤𝙩𝙖: 𝘌𝘴 𝘱𝘰𝘴𝘪𝘣𝘭𝘦 𝘲𝘶𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘦 𝘧𝘢𝘭𝘭𝘰𝘴 𝘺 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘷𝘪𝘦𝘯 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴`)
  for (const i of anu) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '❱❱ 𝘼𝙑𝙄𝙎𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ❰❰\n\n' + pesan + '\n\n𝙀𝙨𝙩𝙚 𝙚𝙨 𝙪𝙣 𝙘𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚 𝘼𝙣𝙜𝙚𝙡𝙞𝙩𝙤 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚 𝙓𝙞𝙖𝘽𝙤𝙩-𝙋𝙧𝙤',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`❱❱ 𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝘾 𝙄 𝙊 𝙉 ❰❰\n\n𝙈𝙚𝙣𝙨𝙖𝙟𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 ${anu.length} 𝙂𝙧𝙪𝙥𝙤𝙨\n\n𝙉𝙤𝙩𝙖: 𝘌𝘴 𝘱𝘰𝘴𝘪𝘣𝘭𝘦 𝘲𝘶𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘱𝘳𝘦𝘴𝘦𝘯𝘵𝘦 𝘧𝘢𝘭𝘭𝘰𝘴 𝘺 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘷𝘪𝘦𝘯 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴`);
};
handler.help = ['avisownergroup', 'bcgc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(avisowner|bc)(group|grup|gc)$/i;
handler.owner = true;

export default handler;