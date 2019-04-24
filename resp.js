//Envia respuestas aleatorias con sistema 8ball.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var rpts = ["Sí", "No", "Tal vez", "No sé", "¡Claro!"];

    if (!args) return message.reply(`Escriba una pregunta.`);
    message.channel.send(message.member.user+' a su pregunta `'+args+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');


}
module.exports.help = {
    name: "resp"
  };


