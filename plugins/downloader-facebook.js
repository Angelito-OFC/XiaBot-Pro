// apóyame en https://trakteer.id/xnuvers007 o https://tr.deployers.repl.co/images

importar axios desde 'axios';
importar buscar desde 'nodo-fetch';

controlador var = asíncrono (m, {argumentos}) => {
    si (!args[0]) {
        throw 'Ingresar URL\nEj: .fb https://www.facebook.com/groups/175204112986693/permalink/1621191825054574/?mibextid=Nif5oz';
    }
    
    intentar {
        URL constante = argumentos[0];
        lista de encabezados constante = {
            "Aceptar": "*/*",
            "Agente de usuario": "Cliente Thunder (https://www.thunderclient.com)"
        };

        opcionesreq constantes = {
            URL: `https://tr.deployers.repl.co/fb?u=${url}`,
            método: "OBTENER",
            encabezados: lista de encabezados,
        };

        respuesta constante = esperar axios.request(reqOptions);
        const firstUrls = respuesta.data.map(item => item.split(','));

        const hdMedia = primeras URL[0][0];
        const sdMedia = primeras URL [1] [0];

        m.reply(`apoyame en https://trakteer.id/xnuvers007 \n https://tr.deployers.repl.co/images`);
        
        const hdCaption = `Video Kualitas HD\nEnlace HD: ${hdMedia}`;
        const sdCaption = `Video Kualitas SD\nEnlace SD: ${sdMedia}`;
        
        m.reply('_Sedang diproses, mohon tunggu..._');

        intentar {
            // Enviar vídeo HD
            const hdFile = esperar a buscar (hdMedia);
            conn.sendFile(m.chat, await hdFile.buffer(), 'video_hd.mp4', hdCaption, m);

            intentar {
                //Envía vídeo SD
                const sdFile = esperar a buscar (sdMedia);
                conn.sendFile(m.chat, await sdFile.buffer(), 'video_sd.mp4', sdCaption, m);
            } atrapar {
                // Si falla el envío de vídeo SD, no es necesario realizar ninguna otra acción
            }
        } atrapar {
            intentar {
                //Envía vídeo SD
                const sdFile = esperar a buscar (sdMedia);
                conn.sendFile(m.chat, await sdFile.buffer(), 'video_sd.mp4', sdCaption, m);
            } atrapar {
                // Si no existen videos HD y SD, envía un mensaje de error
                const cap = 'Gagal mengunduh video FB';
                conn.sendFile(m.chat, 'facebook.mp4', 'facebook.mp4', cap, m);
            }
        }
    } atrapar {
        // Jika terjadi kesalahan pada tahap lainnya, kirim pesan kesalahan
        const cap = 'Gagal mengunduh video FB';
        conn.sendFile(m.chat, 'facebook.mp4', 'facebook.mp4', cap, m);
    }
};

// Configuración bantuan dan tag
handler.help = ['fbdownload <url>'];
handler.tags = ['descargador'];
handler.command = /^(fbdownload|fb(dl)?)$/i;

exportar el controlador predeterminado;