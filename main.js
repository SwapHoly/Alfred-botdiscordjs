const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.PREFIX = PREFIX;

client.commands = new Collection();
client.commands.set("repeat", require("./commands/repeat.js"));
client.commands.set("role", require("./commands/role.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", message => require("./events/message.js")(client, message));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
