const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    if (args.length <= 0) return message.channel.send("Missing argument `<message>`.");

    message.delete(500).catch(err =>{});
    message.channel.send(args.join(" "));
}

module.exports.help = {
    name: "say"
}

module.exports.permissionLevel = 2