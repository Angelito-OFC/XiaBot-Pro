importar buscar desde 'node-fetch'
dejar controlador = async (m) => {
let arr = Object.entries(db.data.chats).filter(usuario => !usuario[1].expirado >= 1).map(usuario => usuario[0])
let boy = `Sukses Menghapus ${arr.length} Chat`
para (dejemos que x de arr) elimine db.data.chats[x]
aguardar m.respuesta(niño)
}
handler.help = ['restablecer chat']
handler.tags = ['propietario']
handler.command = /^(resetchat)$/i
controlador.propietario = verdadero
exportar controlador predeterminado