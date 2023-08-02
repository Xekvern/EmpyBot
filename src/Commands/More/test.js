const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('../../Events/interactionCreate');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Test Command'),
    async execute(interaction, client) {
        await interaction.reply({ content: 'Test' });
    }
}