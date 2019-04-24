const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("**Solo usuarios con permiso para kickear pueden utilizar este comando.**");
if (message.mentions.users.size < 1) return message.reply('**Tienes que mencionar a alguien.**').catch(console.error);

if (!razon) return message.channel.send('**Debes escribir una razón:** `-kick @usuario [razón]`');
if (!message.guild.member(user).kickable) return message.reply('**No me es posible kickear al usuario mencionado.**');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, **ha sido kickeado del servidor, por:** ${razon}.`);



}
module.exports.help = {
    name: "kick"
  };