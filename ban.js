const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
            
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.channel.send("**Solo usuarios con permisos administrativos pueden usar este comando.**");
            
    if (message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien.**').catch(console.error);
    if(!razon) return message.channel.send('**Debes escribir una razon:** `-ban @usuario [razón]`');
    if (!message.guild.member(user).bannable) return message.reply('**No me es posible banear al usuario**.');
            
        
    message.guild.member(user).ban(razon);
    message.channel.send(`**${user.username}**, **ha sido baneado del servidor, por:** ${razon}.`);
    


}
module.exports.help = {
    name: "ban"
  };