const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: No permission.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args)
}

module.exports.help = {
    name: "removerole"
}

module.exports.permissionLevel = 1