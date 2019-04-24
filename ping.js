//Ping del bot y API.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let ping = Math.floor(message.client.ping);

    message.channel.send("Los Ping's son:")
    .then(m => {
    const embed = new Discord.RichEmbed()
         .setDescription(`:ping_pong:**Ping de respuesta:** \`${m.createdTimestamp - message.createdTimestamp} ms\`\n :calling:**Ping API:** \`${ping} ms\``)
         .setColor("#00FF04")
            
         m.edit(embed);
    
    });

}
module.exports.help = {
    name: "ping"
};