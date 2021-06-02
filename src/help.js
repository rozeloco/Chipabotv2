const help = (prefix) => {
	return `
「 *Chipabot by rosse* 」

◪ *INFORMACION*
  ❏ Comando: 「  ${prefix}  」
  ❏ Creador: rosse
  ❏ Instagram: https://www.instagram.com/tt.roose

◪ *PARA USAR EL BOT*
  ❏ Registrate con el comando ${prefix}daftar y tu nombre

◪ *RESUELVE TUS DUDAS*
  │
  ├─ ❏ ${prefix}creador
  └─ Dudas o problemas aqui.

◪ *CREAR STICKERS*
  │
  ├─ ❏ ${prefix}sticker o s
  ├─ ❏ ${prefix}stickergif
  ├─ 6 segundos de video
  ├─ ❏ ${prefix}toimg
  ├─ De sticker a JPG
  ├─ ❏ ${prefix}tomp3
  └─ De video a MP3

◪ *DESCARGAS*
  │
  ├─ ❏ ${prefix}play
  └─ Mas nombre y artista o link del video de YT
El límite es 2000 canciones se restablecerá cada 00.00 o 12.00 a. m.
Asi que no abusen del ${prefix}play

◪ *AUDIO*
  │
  ├─ ❏ ${prefix}play
  ├─ ❏ ${prefix}bahasa
  └─ ❏ ${prefix}tts es

◪ *OTROS*
  │
  ├─ ❏ ${prefix}wame
  ├─ Link del grupo de Whatsapp
  ├─❏ ${prefix}qrcode
  └─ {texto}

◪ *GRUPOS*
  │
  ├─ ❏ ${prefix}closegc
  ├─ Cerrar el grupo solo admins
  ├─ ❏ ${prefix}opengc
  ├─ Abrir grupo solo admins
  ├─ ❏ ${prefix}kick o pafuera
  ├─ Eliminar a un miembro 
  ├─ ❏ ${prefix}promote
  ├─ Dar admin a un miembro
  ├─ ❏ ${prefix}demote
  ├─ Quitar el admin
  ├─ ❏ ${prefix}linkgc
  ├─ Link del grupo
  ├─ ❏ ${prefix}tagall
  └─ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
◪ *NUEVA ACTUALIZACION*
  │
  ├─ ❏ ${prefix}welcome 1
  └─ Da la bienvenida a los nuevos
`
}

exports.help = help
