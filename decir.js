//Dice lo que le pongas.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    if(!args) return message.channel.send("**Tienes que escribir lo que quieras que el bot diga; Ejemplo:** `p-decir Hola!`");
    message.channel.send(args.join(" "));
    message.delete()




}
module.exports.help = {
    name: "decir"
  };