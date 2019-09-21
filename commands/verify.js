module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("You have been verified!")
  .setColor("GREEN")
  message.author.send({embed: em})
  //Verification message
  
  let role = message.guild.roles.get("625086210842558484")

  let member = message.member
  
  member.addRole(role);
  //Add the role.
}

module.exports.help = {
"name": "verify"
}
