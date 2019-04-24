//Embed con comandos de ayuda.


const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    const embed = new Discord.RichEmbed() 
    .setTitle(":keyboard:Comandos Bot::cd:")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#FFE000")
    .setDescription("A continuación una lista de mis comandos:")
    .setFooter("Created by Francesco_Erraco#2107", client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .addBlankField(true)
    .addField(":page_facing_up: => p-info", "Este comando te mostrara la información del bot.:page_with_curl: ", true)
    .addField(":floppy_disk: => p-admin", "Este comando te mostrara los comandos administrativos.:desktop: ", true)
    .addField(":video_game: => p-diversion", "Con este comando veras todos los comandos de diversion que tengo.:smile:", true)
    .addBlankField()
    .addField("¡Proximamente!:", "Mejoras en los comandos administrativos.:sunglasses:", true)
    .addField(":joystick: Forma de uso de los comandos::trackball: ", "-[comando] Ejemplo: `p-diversion`", true);
    message.channel.send({embed});


}
module.exports.help = {
    name: "ayuda"
  };