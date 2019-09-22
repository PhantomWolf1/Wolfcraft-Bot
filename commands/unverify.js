module.exports.run = (bot, message, args, Discord) => {
 
 if(message.member.roles.has("625085120809795634")) {
  let member = message.mentions.members.first();
 let memberid = member.id
  let em = new Discord.RichEmbed()
    .setTitle(`You have been unverified by: ${message.author.username} `)
    .setColor("RED")
    bot.users.get(memberid).send({embed: em})
  //Verification message
  
  let role = message.guild.roles.get("625086210842558484")

  
  member.removerole(role);
} else {
  message.channel.send(`You don't have permission to use this command.`);
}
 
}

module.exports.help = {
"name": "fver"
}
