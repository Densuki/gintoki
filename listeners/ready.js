exports.run = (client) => {
    return "Connected!"
    setPlaying(client, 'Despacito 2', 'LISTENING')
}

function setPlaying(client, game, type) {
    client.user.setActivity(game, { type: type })
}