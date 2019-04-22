const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setTitle("Server Information »")
        .setColor("#d80000")
        .setThumbnail(serverIcon)
        .addField("Server Name »", message.guild.name)
        .addField("Created On »", message.guild.createdAt)
        .addField("You Joined On »", message.member.joinedAt)
        .addField("Total Members »", message.guild.memberCount)
        .setFooter("Shield Dev", client.user.avatarURL)
        .setTimestamp(); 

    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "info"
}