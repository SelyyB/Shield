const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
    
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send("Missing argument `<user>`, `<time>` and `<reason>`.");
    let muteReason = args.slice(1).join(" ");
    if (!muteReason) {
        return message.channel.send("Missing argument `<time>` and `<reason>`.");
    }
    if (toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Cannot mute that user.");
    let muteRole = message.guild.roles.find((r) => r.name === "Supressed");
    if (!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name: "Supressed",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    let muteTime = args[2];
    if (!muteTime) return message.channel.send("Missing argument `<time>`.");

    try {
    await(toMute.addRole(muteRole.id));
    message.channel.send(`:ok_hand: Muted ${toMute.id} for ${ms(ms(muteTime))}, with reason ${muteReason}.`);
    } catch(err) {
        message.channel.send(`:x: ${err.message}`);
    }

    setTimeout(function(){
        toMute.removeRole(muteRole.id);
        message.channel.send(`:alarm_clock: ${toMute.id}'s mute has expired.`);
    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}

module.exports.permissionLevel = 1