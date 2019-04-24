//Envia una loli aleatoria.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    var Weez = require("weez");
    var weez = new Weez.WeezAPI("neYaszDJbYqOeYlWUsXFAwNXhbVU78rJygSd");
      
    let link = await weez.randomLoli()
     
    
    let embed = new Discord.RichEmbed()
    .setColor("#CD00FF")
    .setImage(link);
    message.channel.send(embed)



}
module.exports.help = {
    name: "loli"
  };