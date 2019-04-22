const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.mentions.users.size) { 
        const avatarAuthor = new Discord.RichEmbed()
        .setColor("#f97b1b")
        .setAuthor(`${message.author.username}'s Avatar`)
        .setImage(message.author.avatarURL) 
        .setFooter("Shield Dev", client.user.avatarURL)
        .setTimestamp(); 
        message.channel.send(avatarAuthor);
    } else { 
        const user = message.mentions.users.first() 
        const avatarEmbed = new Discord.RichEmbed()
        .setColor("#f97b1b")
        .setAuthor(`${user.username}'s Avatar`)
        .setImage(user.avatarURL)
        .setFooter("Shield Dev", client.user.avatarURL)
        .setTimestamp();
        message.channel.send(avatarEmbed);}
}

module.exports.help = {
    name: "avatar"
}

module.exports.permissionLevel = 0