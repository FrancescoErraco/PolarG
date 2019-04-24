const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');
    
    let role = message.guild.roles.find(x => x.name === nombrerol)
    let perms = message.member.hasPermission("MANAGE_ROLES");
    
    if(!perms) return message.channel.send("**Solo administradores del servidor pueden usar este comando.**");
         
    if(message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien.**').catch(console.error);
    if(!nombrerol) return message.channel.send('**Debes colocar el nombre del rol que le quieres asignar a este usuario.**');
    if(!role) return message.channel.send('**No se encontro ese rol.**');
        
    miembro.addRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
    



}
module.exports.help = {
    name: "agrol"
  };
