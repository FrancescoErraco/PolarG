//Embed con comandos de dicersion.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    const embed = new Discord.RichEmbed() 
    .setTitle(":joy:Comandos de diversion::metal::skin-tone-4:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#00FFF3")
    .setDescription("Aqui tienes la lista de los comandos divertidos que tengo::page_with_curl:")
    .setFooter("Created by Francesco_Erraco#2107", client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .addField(":stuck_out_tongue_closed_eyes: => p-drake", "Decidamos quien es mejor.:ok_hand::skin-tone-4:", true)
    .addField(":laughing: => p-meme", "¡Mandare memes RANDOM!:thumbsup::skin-tone-4:", true)
    .addField(":smirk: => p-loli", "Cuidado con el FBI chico.:wink:", true)
    .addField(":open_mouth: => p-decir", "¡El bot hablara por ti!:grimacing:", true)
    .addField(":thinking: => p-resp", "¡El bot respondera a tu pregunta!:yum:", true)
    .addField(":wink: => p-trap", "Quizas te gusten los chicos...:shrug::skin-tone-4:", true)
    .addBlankField()
    .addField(":smile:¡Proximamente!:", "¡Mas comandos de diversion!:stuck_out_tongue:", true)
    .addField(":joystick: Forma de uso de los comandos::trackball: ", "-[comando] Ejemplo: `p-meme`", true);
    message.channel.send({embed});



}
module.exports.help = {
    name: "NOMBRE-DEL-COMANDO"
  };