const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.author.bot) return;
	if (message.author.id) {
setTimeout(function(){
		message.channel.send("La trattativa aperta <@"+ message.author.id + "> è ufficialmente chiusa.")}, 86400000);
	}

});


client.login('NzY0MDU1MTA4OTAzMzcwNzUy.X4ArxQ.v8HH7Y784E57NoL_iqOOIp2jBN4');
