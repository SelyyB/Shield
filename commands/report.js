const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!rUser) return message.channel.send("Missing arguments `<user>` and `<reason>`.");
        
        if (args.length < 2) {
            return message.channel.send("Missing argument `<reason>`.");
        }
        
        let reportReason = args.slice(1).join(" ");

        let reportEmbed = new Discord.RichEmbed()
            .setTitle("Report »")
            .setColor("#008cbf")
            .addField("Reported User »", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By »", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel »", message.channel)
            .addField("Time »", message.createdAt)
            .addField("Reason »", reportReason)
            .setFooter("Shield Dev", client.user.avatarURL)
            .setTimestamp();

        let reportsChannel = message.guild.channels.find(v => v.name == "reports");
        if (!reportsChannel) return message.channel.send("Could not find reports channel.");

        message.delete().catch(err =>{});
        await reportsChannel.send(reportEmbed);

        return;
}

module.exports.help = {
    name: "report"
}

module.exports.permissionLevel = 0