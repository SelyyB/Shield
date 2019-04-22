const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const token = require("./token.json");
const fs = require("fs");

client.commands = new Discord.Collection();

fs.readdir(`${__dirname}/commands/`, (err, files) => {
    if (err) console.log(err);

    let jsFiles = files.filter(f => f.split(".")[1] === "js");
    if (jsFiles.length <= 0) {
        console.log("Could not find any commands.")
        return;
    }

    jsFiles.forEach((f, i) => {
        try {
            let command = require(`./commands/${f}`);
            console.log(`[CMDS] "${command.help.name}" loaded`);
            client.commands.set(command.help.name, command);
        } catch (err) {
            console.error(`[CMDS] Failed to load command in file "${f}".`);
            console.error(err);
        }
       
    });
});

client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity(`${client.guilds.size} servers. | +help`, {type: 'WATCHING'})
});

function checkPermission(message, command) {
    // if no command permission:
    if (!command.permissionLevel) {
        return true;
    }

    let permissionLevel = 0;
    if (message.member.owner) {
        permissionLevel = 1;
    }
    if (message.author.id === config.id) {
        permissionLevel = 2;
    }
    return permissionLevel >= command.permissionLevel
}

client.on("message", async (message) => {
    // tidied your two if statements into one :3
    if (message.author.bot || message.channel.type === "dm") {
        return;
    }

    // you can make this look nice too :3
    const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);

    const cmd = args.shift().toLowerCase();

    if (message.content.startsWith(config.prefix)) {
        const command = client.commands.get(cmd);

        // If no command, return - skips execution
        if (!command) {
            return;
        }

        if (!checkPermission(message, command)) {
            // Tell user they don't have permission to run command.
            message.channel.send(":x: You don't have permission to run this command!");
            return;
        }

        command.run(client, message, args);
    }
});

client.login(token.token);