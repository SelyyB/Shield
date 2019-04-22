const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send("Missing argument `<user`.")
    }

    const userToUnban = message.guild.members.get(args[0])
        ? message.guild.members.get(args[0])
        : message.mentions.members.first();

    await message.guild.unban(userToUnban).catch(err => {
        return message.channel.send(":x: Could not unban user.");
    })

    return message.guild.unban(`${userToUnban.id}`)
    .then(userToUnban => message.channel.send(`:ok_hand: ${userToUnban.id} was unbanned.`))
    .catch(console.error);
}

module.exports.help = {
    name: "unban"
}

module.exports.permissionLevel = 1