const Discord = require('discord.js');
const message = require('./events/guild/message');
const client = new Discord.Client();
require('dotenv').config();



//const memberCounter = require('./counters/member-counter');

client.on('ready', () => {
	console.log(`
╔══════════════════════════════════════╗
║          Bot: ${client.user.tag}         ║                                                                                     
║           Status: ONLINE             ║                                             
╚══════════════════════════════════════╝
    `);

    client.user.setActivity('Discord.gg/[]');
})

//add role to user when joining thats the id of the role 


//when bot is added to server send this etc
client.on("guildCreate", guild => {
    console.log("I Just Joined" + guild.name)
    const newEmbed = new Discord.MessageEmbed()
        .setTitle('Thanks For Being in suke piece!')
        .setThumbnail('https://preview.redd.it/oqkxzjhcmz761.jpg?auto=webp&s=4ef5bb768a1c7b3411ba8ba9cfd4d488550cd644')
        .setDescription('Thanks for **Being in suke piece**!')
        .setTimestamp()
        .setColor('#940404')
        .setFooter('https://discord.gg/grandpieceonline')
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(newEmbed);
})





    

client.commands = new Discord.Collection();
client.events = new Discord.Collection();



//this command handler is shit trust me

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.ODc3MDgxNTUzNjIzMTkxNTgy.YRtb2Q.GHFRwqkDTOegIEFrjcpXZ_M5fvA);//gotta use env