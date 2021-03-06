exports.run = (client, message, args) => {
  const channel = client.channels.cache.find(r => r.name === "logs-alfred");
  const role = message.guild.roles.cache.find(r => r.name === args[0]);
  if (!role) return message.channel.send("Ce rôle n'existe pas !");

  if (message.member.roles.cache.find(r => r.name === args[0])) {
    message.member.roles.remove(role);
    channel.send(`J'ai supprimé le rôle ${role} à ${message.author}.`);
    message.delete({ timeout: 1 }).then(console.log(`Message supprimé: ${message.content}`));
  } else {
    message.member.roles.add(role);
    channel.send(`J'ai ajouté le rôle ${role} à ${message.author}.`);
    message.delete({ timeout: 1 }).then(console.log(`Message supprimé: ${message.content}`));
  }
};

exports.help = {
  name: "role"
};
