const Discord = require('discord.js');

const  client = new Discord.Client();

const config = require("./config.json");

const fs = require('fs');


  
client.on("error", (e) => console.error(e));

client.on("warn", (e) => console.warn(e));

client.on("debug", (e) => console.info(e));


client.on("ready", () => {
  console.log(`!Listo!, Conectado En ${client.guilds.size} Servidores Con ${client.users.size} Usuarios.`);
  client.user.setPresence( {
      status: "online",
      game: {
          name: `p-ayuda | Created by Francesco_Erraco#2107.`,
          type: "PLAYING" 
      }
   });
});



client.on("message", async message => {

  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
  } catch (err) {
  }
});

client.login(config.token);       