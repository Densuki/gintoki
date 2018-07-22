exports.run = (client, message, args) => {
    var ping = client.ping
    message.channel.send(ping).catch(console.error);
}