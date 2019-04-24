//Envia informacion sobre el servidor en el que fue ejecutado el comando.


const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('**ID**', server.id, true)
    .addField('**Region**', server.region, true)
    .addField('**Creado el**', server.joinedAt.toDateString(), true)
    .addField('**Dueño del Servidor**', server.owner.user.tag+' ('+server.owner.user.id +')', true)
    .addField('**Miembros**', server.memberCount, true)
    .addField('**Roles**', server.roles.size, true)
    .setColor("#00F0FF")
        
    message.channel.send(embed);
    



}
module.exports.help = {
    name: "server"
  };