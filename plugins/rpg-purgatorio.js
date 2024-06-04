const handler = async (m, {conn, text, command}) => {
  const yh = global.purgatorio;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🔮 PURGATORIO 🔮*'}, {quoted: m});
};
handler.command = /^(purgatorio|mapapurgatorio)$/i;
handler.tags = ['internet'];
handler.help = ['mapa'];
export default handler;

global.calendario = [
  'https://cdn.discordapp.com/attachments/1009154096588140605/1157519401713684510/8ea51a3f-cc3d-428f-af0c-0175ccd3ce30.png',
];