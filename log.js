const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    let messageCount = parseInt(args);

    if(!args)  message.channel.send('Debes escribir cuantos mensajes quieres que borre, ejemplo:** p-log `5 - 100`');
    messageCount = (args.slice(' '))[0];
          
    if(messageCount >= 2 && messageCount <= 100){
        message.channel.fetchMessages({limit: messageCount})
        .then(messages => message.channel.bulkDelete(messages));
    
    }else{
        message.channel.send('**Solo puedo eliminar un limite de 100 mensajes.**');
    }

}
module.exports.help = {
    name: "log"
  };