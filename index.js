//La Connection du bot Narvalo !
const Discord = require("discord.js");
const YoutubeStream = require("ytdl-core");
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Discord.Client({
   intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.DIRECT_MESSAGES,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES
   ]
});
client.on("ready", () => {
   console.log("Félicitations");
});
client.login("MzYyNTg2OTczNjE5MDkzNTI1.Wcujbw.fLfLeLrMPIBydEl0mcyEYCwaAcI");

//Lucas ici c'est le prefix (ce que tu met pour la commande genre / ou !)
const prefix = "/"

//Connection du bot au salon
client.on('messageCreate', message => {
    if(message.content === prefix + "join") {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator

        })
    }
})

//deconnection du bot au salon
client.on('messageCreate', message => {
   if(message.content === prefix + "leave") {
       leaveVoiceChannel({
           channelId: message.member.voice.channel.id,
           guildId: message.guild.id,
           adapterCreator: message.guild.voiceAdapterCreator
       })
   }
})

//Ici le gag du ping
client.on("messageCreate", message => {
   if (message.author.bot) return;

   if(message.content === prefix + "ping"){
      message.reply("Va te faire foutre ta vraiment cru que j'allais te répondre pong ? t'es vraiment un Narvalo!");   
   }
   else if(message.content === prefix + "help"){
      message.reply("Voici les commandes du bot:");
   }
});

   
// stream youtube ne touche pas !
