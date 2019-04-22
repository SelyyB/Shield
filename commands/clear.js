const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let amount = args[0];

    if (args.length <= 0) return message.channel.send("Missing argument `<amount>`.");

    try {
    let toDelete = await message.channel.fetchMessages({limit: amount});
    message.channel.bulkDelete(toDelete);
    } catch (err) {
        message.channel.send(`:x: ${err.message}`);
    }
    return message.channel.send(`:ok_hand: Cleared ${amount} messages.`)
    
}

module.exports.help = {
    name: "clear"
}

module.exports.permissionLevel = 1