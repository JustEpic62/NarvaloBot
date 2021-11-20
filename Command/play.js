const ytdl = require('ytdl-core');

module.exports.run = async (bot, messag, args) => {
  if (!Message.member.voiceChannel)
    return message.channel.send('Connectez vous a un salon vocal!');
  if (message.guild.me.voiceChannel)
    return message.channel.send('Le bot et deja conncté a un salon!');
  if (!args[0])  
    return message.channel.send('Merci de préciser un lien YouTube!');

  const validate = await ytdl.getInfo(args[0]);
  if (!validate) return message.channel.send("Desolé l'URL n'est pas valide!");

  const info = await ytdl.getInfo(args[0]);
  const connection = await message.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
      ytdl(args[0], { filter: 'audioonly' })
  );
  message.channel.send('Musique ajoutée ! ${info.title}');
};

module.exports.help = {
    name: 'play'
};