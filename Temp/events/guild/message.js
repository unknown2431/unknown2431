

module.exports = (Discord, client, message) => {
    const prefix = '^';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (err) {
        //grabs error then sends a error msg
        console.log(`${message.author.tag} used a broken cmd in ${message.guild}`)
        const newEmbed = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/attachments/832257720447008780/860376124176465930/859529478878789642.gif')
        .setTimestamp()
        .setColor('#940404')
        .addFields(
            {name: 'Error, Not A Real Command!', value:'`%help` to use the real commands'}
            )
        .setFooter('discord.gg/amaterasu')
        message.channel.send(newEmbed);
    }
 
}