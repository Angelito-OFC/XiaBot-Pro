import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) throw `❱❱ 𝘼  𝙑  𝙄  𝙎  𝙊 ❰❰

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙀𝙧𝙧𝙤𝙣𝙚𝙤.

» 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙤: 
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘴𝘪𝘮𝘪 𝘩𝘰𝘭𝘢 𝘉𝘰𝘵?`;
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `❗ 𝙀𝙧𝙧𝙤𝙧 𝙫𝙪𝙚𝙡𝙫𝙚 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤`;
    }
  }
};
handler.help = ['simi', 'bot'].map((v) => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;
export default handler;
