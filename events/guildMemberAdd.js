module.exports = (client, member) => {
  /* member.send("Salut à toi !"); */
  const channel = client.channels.cache.find(r => r.name === "logs-alfred");
  channel.send(`${member} a rejoint le serveur !`);
};
