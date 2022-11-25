const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shutdown",
  description: "Kills the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["kill"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
*/


run: async (client, message, args) => {

    if(message.author.id != "341244232591212556") return message.channel.send("You're not bot the owner!")

    else {
        message.channel.send("Shutting Down...")
        setTimeout(10)
        .then(client.destroy())

    }
}
}