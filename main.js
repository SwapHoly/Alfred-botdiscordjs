const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", msg => {
  // bk
  if (msg.content.startsWith(`${PREFIX}tennis-de-table`)) msg.channel.send("ping");
  if (msg.content === "ping") msg.channel.send("pong");
  if (msg.content === "pong") msg.channel.send("ping");
});

/* client.on('messageReactionAdd', (messageReaction, user) => {
  if (messageReaction.message === "Test des rôles !") {
    if (messageReaction.emoji.id === )
  }
}); */

// eslint-disable-next-line eol-last
client.login(TOKEN);