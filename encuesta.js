const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    if(!args) return message.channel.send('Agrege una pregunta para la encuesta.')

    const embed = new Discord.RichEmbed()
          .setAuthor('Pregunta:')
          .setDescription('**'+args.join(' ')+'**\n')
          .addField('Opcion 1:', '1\u20e3 Si')
          .addField('Opcion 2:', '2\u20e3 No')
          .setColor("#FF9E00")
          .setTimestamp()
    
    message.channel.send(embed)
    .then(m => {
            m.react("1\u20e3");
            m.react("2\u20e3");
    
    });


}
module.exports.help = {
    name: "encuesta"
  };