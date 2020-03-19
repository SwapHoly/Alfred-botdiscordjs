module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete({ timeout: 1 }).then(console.log(`Message supprimé: ${message.content}`));
};
