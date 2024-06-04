const handler = async (m, {conn, text, command}) => {
  const yh = global.calendario;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🔮 CALENDARIO 🔮*'}, {quoted: m});
};
handler.command = /^(calendario|calendarioff)$/i;
handler.tags = ['internet'];
handler.help = ['calendario'];
export default handler;

global.calendario = [
  'https://telegra.ph/file/78c7aa2304517d2e896ec.jpg',
];