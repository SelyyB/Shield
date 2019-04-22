const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send("Missing arguments `<user>`.");
    }
    const userToHug = message.guild.members.get(args[0])
        ? message.guild.members.get(args[0])
        : message.mentions.members.first();

    return message.channel.send(`${userToHug}, ${message.author.username} just gave you a big big hug!`);
}

module.exports.help = {
    name: "hug"
}