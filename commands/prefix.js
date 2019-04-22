const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    let prefixEmbed = new Discord.RichEmbed()
    .setTitle("Prefix Information")
    .setColor("#5820e5")
    .addField("Prefix »", `The bot's current prefix is "${config.prefix}".`)
    .setFooter("Shield Dev", client.user.avatarURL)
    .setTimestamp();

    return message.channel.send(prefixEmbed)
}

module.exports.help = {
    name: "prefix"
}