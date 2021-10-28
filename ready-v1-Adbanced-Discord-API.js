const Discord = require("discord.js");s
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, message) => {
  
  //Creamos Estados de Bot Multiples que cambien por si Solo.
    setInterval(function() {
        var estados = ["Code by: https://github.com/HappyRogelio7/7w7/","Github create code: https://github.com/HappyRogelio7/"]
        let estado = estados[Math.floor(estados.length * Math.random())];
        client.user.setPresence({
          status: "idle", //dnd = no molestar, idle = Ausente , invible, online
          activity: {
            name: estado,
            type: "PLAYING", //PLAYING = Jugando, WATCHING = Viendo, LISTENING = Escuchando, STREAMING = En Directo
          }
        })
      }, 60000); //tiempo en milisegundos. 60000 = 1 minuto
    
    //Creamos el Embed
      let Embed = new Discord.MessageEmbed()
      //Titulo de nuestro Embed
          .setTitle(client.user.tag+" BOT:")
      //IMG del Avatar de Nuestro Bot
          .setThumbnail(client.user.displayAvatarURL())
      //Message Que aparecera en nuestro discord
          .setDescription(
          "***Estoy Listo/a:***"
          +"\n"
          +"Estado: `Online/En Linea.`"
          +"\n"
          +"\n"
          +"=========================================="+"\n"
          +"| User: Discord ✔|"+"\n"
          +"| Password: Password ✔|"+"\n"
          +"| Login: Verify ✔ |"+"\n"
          +"=========================================="+"\n"
          +"\n")
          .setColor("RANDOM")//Color el Embed Puede ser [Colores HEX](https://htmlcolorcodes.com/es/) O RANDOM
      //Footer, avatar y hora en la que se inicio el bot
          .setFooter("Code by: https://github.com/HappyRogelio7/7w7/", client.user.displayAvatarURL())
          .setTimestamp()
      //id del canal donde mandartemos en mensaje de Encendido del bot.
      client.channels.cache.get("CHANNEL-ID").send(Embed);
          //Mensaje de Consola para decir que el bot a Inciado Correctamente.
          console.log("[Logs] ============================================")
          console.log("[Logs] | User: Discord ✔                          |")
          console.log("[Logs] | Password: Password ✔                    |")
          console.log("[Logs] | Login: Verify✔                          |")
          console.log("[Logs] ============================================")

}
  
