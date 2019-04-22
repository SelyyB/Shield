const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send("Missing arguments `<user>` and `<reason>`.");
    }

    const userToBan = message.guild.members.get(args[0])
        ? message.guild.members.get(args[0])
        : message.mentions.members.first();

    if (!userToBan) {
        return message.channel.send("Could not parse to ``snowflake``.");
    }

    const reason = args.slice(1).join(" ").length > 0 ? args.slice(1).join(" ") : "None";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(":x: Not enough permissions.");
    }

    if (userToBan.id == message.author.id) {
        return message.channel.send(":x: You cannot ban yourself")
    }

    if (userToBan.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`:x: Cannot ban that user.`);
    }

    if (!userToBan.bannable) {
        return message.channel.send(":x: Cannot ban that user. (unbannable)");
    }

    await userToBan.ban(reason).catch(err => {
        return message.channel.send(":x: Could not ban user.");
    });

    return message.channel.send(`:ok_hand: banned ${userToBan} for \`${reason}\`.`);

}

module.exports.help = {
    name: "ban"
}

module.exports.permissionLevel = 1