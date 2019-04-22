const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let issueReason = args.join(" ");
    if (!issueReason) {
        return message.channel.send("Missing arguments `<issue>`.");
    }

    let issueEmbed = new Discord.RichEmbed()
    .setTitle("Issue »")
    .setColor("#c91010")
    .addField("Submitted By »", `${message.author} with ID: ${message.author.id}`)
    .addField("Server »", message.guild)
    .addField("Channel »", message.channel)
    .addField("Time »", message.createdAt)
    .addField("Issue »", issueReason)
    .setFooter("Shield Dev", client.user.avatarURL)
    .setTimestamp();

    let confirmEmbed = new Discord.RichEmbed()
    .setColor("#03bc22")
    .addField("Success!", `:white_check_mark: Issue successfully submitted, the developer will review it, and investigate shortly.`)
    .setFooter("Shield Dev", client.user.avatarURL)
    .setTimestamp();

    message.delete(500).catch(err =>{});
    message.author.send(confirmEmbed);
    return client.users.get("249462738257051649").send(issueEmbed);
}

module.exports.help = {
    name: "support"
}

module.exports.permissionLevel = 0