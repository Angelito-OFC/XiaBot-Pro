/* Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883 */
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text }) => {
 if (!text) throw `*[❗] Ingrese el nombre de alguna canción de spotify.*`;
  try {
    const res = await fetch(global.API('ApiEmpire', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('ApiEmpire', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('ApiEmpire', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = `*• 💽 Spotify Download •*\n\n`
         spotifyi += `	◦  *Título:* ${spty.title}\n`
         spotifyi += `	◦  *Artista:* ${spty.artist}\n`
         spotifyi += `	◦  *Album:* ${spty.album}\n`                 
         spotifyi += `	◦  *Publicado:* ${spty.year}\n\n`   
         spotifyi += `El audio se esta enviando, espere un momento..`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '*[❗] Error, no se encontraron resultados.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;