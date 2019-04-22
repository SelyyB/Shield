const Discord = require("discord.js");

module.exports = {
    help: {
        name: "ping",
    },
    run: (client, message, args) => {

        client.ping

        return message.channel.send(`The bot's ping is: ${Math.round(client.ping)}ms.`);
    }
}

module.exports.permissionLevel = 0