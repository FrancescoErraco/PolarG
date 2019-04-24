//Meme de drake.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    var Weez = require("weez");
    var weez = new Weez.WeezAPI("neYaszDJbYqOeYlWUsXFAwNXhbVU78rJygSd");
      
    
     let member = message.mentions.users.first()
     
    let img = await weez.drake(message.author.displayAvatarURL, member.displayAvatarURL)
     
    message.channel.send({files: [img]})




}
module.exports.help = {
    name: "drake"
  };