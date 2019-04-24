const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var Weez = require("weez");
    var weez = new Weez.WeezAPI("neYaszDJbYqOeYlWUsXFAwNXhbVU78rJygSd");
   
    let mensage = args.join()
    let img = await weez.trump(mensage)
    message.channel.send({files: [img]})




}
module.exports.help = {
    name: "trump"
  };