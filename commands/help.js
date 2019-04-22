const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let member = message.author;
    let serverEmbed = new Discord.RichEmbed()
        .setTitle("Help | Commands Information")
        .setColor("#06e5e5")
        .addField("Public Commands »", "**+help**: Shows this page. \n **+info**: Shows the server's info. \n **+botinfo**: Shows the bot's info. \n **+report**: Reports a user with a specified reason. (needs a channel called #reports to work) \n **+ping**: Checks the bot's ping to the api. \n **+cute**: Tells you, that you're cute. (cause you are) \n **+avatar**: Shows your avatar, or the one's you mentioned. \n **+hug**: Hugs someone you mention. \n **+support**: Use this command to contact the developer, if you have any issues with the bot (errors mostly).")
        .addField("Moderator Commands »", "**+clear**: Deletes a specific amount of messages. \n **+kick**: Kicks a user with a specific reason. \n **+tempmute**: Mutes a user for a specific time, along with a reason. \n **+ban**: Bans a user with a reason. \n **+unban**: Unbans a user. \n **+addrole**: Adds a role to a user. \n **+removerole**: Removes a role from a user.")
        .addField("Developer Commands »", "**+say**: Makes the bot say what you tell it to. \n **+eval**: The usual eval command. \n **+servers**: Lists the servers the bot is in.")
        .setFooter("Shield Dev", client.user.avatarURL)
        .setTimestamp();

        message.channel.send(":mailbox_with_mail: DMed you the help you requested!")
        return member.send(serverEmbed);
}

module.exports.help = {
    name: "help"
}

module.exports.permissionLevel = 0