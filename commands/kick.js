const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) {
        return message.channel.send("Missing arguments `<user>` and `<reason>`.");
    }

    const userToKick = message.guild.members.get(args[0])
        ? message.guild.members.get(args[0])
        : message.mentions.members.first();

    if (!userToKick) {
        return message.channel.send("Could not parse to `snowflake`.");
    }

    const reason = args.slice(1).join(" ").length > 0 ? args.slice(1).join(" ") : "`N/A";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":x: Not enough permissions.");
    }

    if (userToKick.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`:x: Cannot kick that user.`);
    }

    if (!userToKick.kickable) {
        return message.channel.send(":x: Cannot kick that user. (unkickable)");
    }

    if (userToKick.id == message.author.id) {
        return message.channel.send(":x: You cannot kick yourself")
    }

    await userToKick.kick(reason).catch(err => {
        return message.channel.send(":x: Could not kick user.");
    });

    return message.channel.send(`:ok_hand: kicked ${userToKick} for \`${reason}\`.`);
}

module.exports.help = {
    name: "kick"
}

module.exports.permissionLevel = 1