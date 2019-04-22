const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    if (message.author.id !== config.id) return message.channel.send(":x: Sorry, only the owner of the bot can execute this command.");
    
    let servers = client.guilds.map(g=>g.name).join('\n');
    let serversEmbed = new Discord.RichEmbed()
    .setTitle("Bot | Server List")
    .setColor("#bb2fce")
    .addField("Servers »" , servers)
    .setFooter("Shield Dev", client.user.avatarURL)
    .setTimestamp();

    return message.channel.send(serversEmbed);
}

module.exports.help = {
    name: "servers"
}

module.exports.permissionLevel = 2