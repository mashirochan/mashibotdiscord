const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log('Haii!^-^');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

client.login(config.token);