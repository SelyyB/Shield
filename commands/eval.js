const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async(client, message, args) => {
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      const argsEval = message.content.split(" ").slice(1);
     
        try {
          const code = argsEval.join(" ");
          let evaled = eval(code);
     
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
     
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}
module.exports.help = {
    name: "eval"
}

module.exports.permissionLevel = 2