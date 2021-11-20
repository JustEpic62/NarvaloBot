module.exports.run = async (bot, message, args) => {
    if (!message.member.voicechannel)
      return message.channel.send('Connectez vous a un salon vocal!');
    if (!message.guild.me.voiceChannel)
      return message.channel.send("Le bot n'est pas connecté");
    if (message.guild.mevoiceChannelID !== message.member.voiceChannelID)  
      return message.channel.send("vous n'etes pas dans le meme salon!");
    message.guild.me.voiceChannel.leave();
    message.delete();
};

module.exports.help ={
    name: 'stop'
};