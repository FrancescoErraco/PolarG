//Envia un meme aleatorio.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    var Weez = require("weez");
    var weez = new Weez.WeezAPI("neYaszDJbYqOeYlWUsXFAwNXhbVU78rJygSd");
      
    let link = await weez.randomMeme()
     
    
    let embed = new Discord.RichEmbed()
    .setColor("#00FF23")
    .setImage(link);
    message.channel.send(embed)



}
module.exports.help = {
    name: "meme"
  };