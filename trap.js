//Envia trapitos aleatorios.

const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var Weez = require("weez");
    var weez = new Weez.WeezAPI("neYaszDJbYqOeYlWUsXFAwNXhbVU78rJygSd");
      
    let link = await weez.randomTrap()
     
    
    let embed = new Discord.RichEmbed()
    .setColor("#00FF42")
    .setImage(link);
    message.channel.send(embed)



}
module.exports.help = {
    name: "trap"
  };