const { Client, RichEmbed } = require('discord.js')
const fs = require('fs')
const { DISCORD_TOKEN, PREFIX, DATABASE } = require('./config')
const { connectDB } = require('./database/rundb')
const { user } = require('./database/schemas')

connectDB(DATABASE)

const client = new Client({
    enableEveryone: false
})

var listenersDir = './listeners'

fs.readdir(listenersDir, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let listenerFunction = require(`${listenersDir}/${file}`);
    let listener = file.split(".")[0];
    client.on(listener, (...args) => listenerFunction.run(client, ...args));
  });
});


client.on('message', message => {
    var commandsDir = './commands'
    
    if(message.content.indexOf(PREFIX) !== 0) return;
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
            
    try {
        let commands = require(`${commandsDir}/${command}`)
        commands.run(client, message, args, user)
    } catch (e) {
      message.channel.send('`I don\'t have that command in my system~`')  
    }
    
})

client.login(DISCORD_TOKEN).then(() => console.log("Connected!"))