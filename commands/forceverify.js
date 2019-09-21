module.exports.run = (bot, message, args, Discord) => {
 
 let member = message.mentions.members.first();
 let memberid = member.id
  let em = new Discord.RichEmbed()
    .setTitle("You have been force verified!")
    .setColor("GREEN")
    memberid.send({embed: em})
  //Verification message
  
  let role = message.guild.roles.get("625086210842558484")

  
  member.addRole(role);
  //Add the role.
}

module.exports.help = {
"name": "fverify"
}
