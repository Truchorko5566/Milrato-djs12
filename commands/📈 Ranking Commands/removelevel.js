//Here the command starts
const config = require("../../config.json")
module.exports = {
	//definition
	name: "removelevel", //the name of the command 
	category: "📈 Ranking Commands", //the category this will be listed at, for the help cmd
	aliases: [""], //every parameter can be an alias
	cooldown: 4, //this will set it to a 4 second cooldown
	usage: "removelevel <@User> <Amount>", //this is for the help command for EACH cmd
  	description: "Remove a specific amount of Levels to a User", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
	let ranking = client.setups.get(message.guild.id, "ranking");
	/**
	 *  ranking: {
	 *      enabled: true
	 *  },
	 */
		const { MessageEmbed } = require("discord.js");
	let disabled = new MessageEmbed()
    .setColor(config.colors.no)
    .setTitle("Your Owner disabled the Ranking-System! Sorry")
    .setFooter("Milrato", config.AVATARURL)
    .setThumbnail(config.AVATARURL)
	if(!ranking.enabled) return message.reply(disabled);
	}
}
//-CODED-BY-Truchorko#5566-//