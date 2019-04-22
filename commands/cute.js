const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    return message.reply("You're cute, uwu :heart:.");
}

module.exports.help = {
    name: "cute"
}

module.exports.permissionLevel = 0