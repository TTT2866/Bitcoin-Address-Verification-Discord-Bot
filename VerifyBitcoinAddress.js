const Discord = require("discord.js");
const client = new Discord.Client();
var WAValidator = require('wallet-address-validator'); //npm install wallet-address-validator 
//https://www.npmjs.com/package/wallet-address-validator
client.login('123456789'); //Bot login tokin goes here


console.log("Bot running..");


//catch message here
client.on('message', message => {
	if (message.author.bot) return;
    var x = message.content.substring(0, 8);
	
	if (x == ".address") {
		var string = message.content.substring(9);
//string = content after the address prefix		


 
var valid = WAValidator.validate(string, 'BTC');
if(valid == true){
	message.channel.send("``"+string+" is a valid Bitcoin address``");
} else {
	message.channel.send("``"+string+" is NOT a valid Bitcoin address``");
}

console.log(valid);
	console.log("Detected verification call");
	
	}})

