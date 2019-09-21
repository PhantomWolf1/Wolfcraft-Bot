module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("Here are my commands!")
  .addField("Help", "Displays this message.")
  message.channel.send({embed: em})
}

module.exports.help = {
"name": "help"
;
