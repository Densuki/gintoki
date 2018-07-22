exports.run = (client, message, args) => {
    message.channel.send("Test!").catch(console.error);
}