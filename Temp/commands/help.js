const Discord = require('discord.js');
module.exports ={
    name: 'help',
    description: "This command can show us the right way to use the admin commands like kick or ban",
    async execute(message,args, cmd, client, Discord) {
        const newmebed = new Discord.MessageEmbed()
        .setTitle('Thanks For Being in suke piece!')
        .setThumbnail('https://preview.redd.it/oqkxzjhcmz761.jpg?auto=webp&s=4ef5bb768a1c7b3411ba8ba9cfd4d488550cd644')
        .setDescription('Thanks for **Being in suke piece**!')
        .setTimestamp()
        .setColor('#940404')
        .setFooter('https://discord.gg/grandpieceonline')
        message.channel.send(newmebed);
    }
    }


