//Embes con los comandos administrativos.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    const embed = new Discord.RichEmbed() 
    .setTitle(":book:Esta es la lista de comnados administrativos del BOT.:metal::skin-tone-4:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#1B00FF")
    .setColor("#FF2E00")
    .setDescription("A continuacion tendras una lista de los comandos administrativos que tengo, espero te ayuden mucho en el servidor.")
    .setFooter("Crated by Francesco_Erraco#2107", client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .addBlankField(true)
    .addField(":bangbang: => p-ban","Como su nombre lo muestra, este es el comando que utilizaras para banear a cualquier spammer o user que venga a molestar en tu servidor, etc.:no_entry: ")
    .addField(":punch::skin-tone-4: => p-kick", "Este comando sirve para kickear (expulsar) a alguien de tu servidor, pero esta persona podra volver a entrar ya que solo ha sido expulsada/o.:wave::skin-tone-4: ", true)
    .addField(":open_file_folder: => p-log", "Sirve para borrar mensajes del chat, forma de uso: p-log `5 - 100` :ballot_box:")
    .addField(":stuck_out_tongue: => p-agrol", "Con este comando le asignaras a alguien un rol de tu servidor.:fist::skin-tone-4:", true)
    .addField(":inbox_tray: => p-encuesta", "Este comando sirve para crear una encuesta, modo de uso: `p-encuesta [pregunta]`.:pager: ", true)
    .addField(":desktop: => p-ping", "Con este comando veras el ping del API y de la respuesta del Bot.:watch:", true)
    .addField(":file_cabinet: => p-server", "Este comando te mostrara la informacion del servidor.:computer:", true)
    .addBlankField()
    .addField("¡Proximamente!:", "Comando para quitar roles a los usuarios, borrar el log del chat y muchos mas de gran ayuda.:sunglasses: ", true);
    
    message.channel.send({embed});




}
module.exports.help = {
    name: "admin"
  };