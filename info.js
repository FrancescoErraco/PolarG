const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    message.channel.send({embed: {
        color: 3447003,
        description: "**:wave::skin-tone-4:¡Hola! Yo me llamo Polar, fuí creado para ayudarte a ti y a todo el servidor para que tu estadía sea mas buena. Tengo comandos administrativos y de diversión. Si quíeres saber mas de estos puedes utilizar:** `p-admin` o `p-diversion`.:ok_hand::skin-tone-4:"
      }});


}
module.exports.help = {
    name: "info"
  };