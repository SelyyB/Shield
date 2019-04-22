const Discord = require("discord.js");

const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600) % 24
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60
    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}

module.exports.run = async (client, message, args) => {
    let botIcon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
        .setTitle("Bot Information »")
        .setColor("#00bcb3")
        .setThumbnail(botIcon)
        .addField("Bot Name »", client.user.username)
        .addField("Created On »", client.user.createdAt, true)
        .addField("Creator »", "Lost#9999", true)
        .addField("Uptime »", `\`${toHHMMSS(process.uptime())}\``)
        .setFooter("Shield Dev", client.user.avatarURL)
        .setTimestamp();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "botinfo"
}

module.exports.permissionLevel = 0