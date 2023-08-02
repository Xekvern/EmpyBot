const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("Flip a coin!"),
    execute(interaction) {
        const num = Math.random() * 2;
        if(num > 1) return interaction.reply('Tails!');
        else return interaction.reply('Heads!');
    },
};