const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription('Send the rules embed message of the server.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle('☆ Emporium Rules ☆')
        .setDescription(`Welcome to our Emporium! To guarantee that everyone has a wonderful experience on our server, we have rules and expectations for you to abide by.`)
        .addFields({
            name: "1 — NO RACISM",
            value: "We do not tolerate racism to the fullest extent, anyone caught discriminating of any form will be banned.",
            inline: false
        })
        .addFields({
            name: "2 — NO BULLYING",
            value: "Bullying is already in Discords Terms of Services, thus we do not allow it as well, this is a server safe for everyone, however there is an exception with the use of tone indicators.",
            inline: false
        })
        .addFields({
            name: "3 — NO MINI-MODDING",
            value: "We have mods of our own to manage the server while the executives are away, it would be much appreciated if members were to abide by this rule and not interrupt the work for mods, anyone caught will have a verbal warning.",
            inline: false
        })
        .addFields({
            name: "4 — USE CHANNELS ACCORDINGLY",
            value: "Channels are created for its own purpose, it would be very messy and a waste if nobody would follow.",
            inline: false
        })
        .addFields({
            name: "5 — NO ADVERTISEMENT",
            value: "We understand the fact that you want to advertise your own server, shop, site or whatnot , anyone caught advertising without permission will be banned immediately.",
            inline: false
        })
        .addFields({
            name: "6 — NO NSFW",
            value: "We do not allow NSFW on the server, this is self explinatory.",
            inline: false
        })
        .addFields({
            name: "7 — NO RAIDING",
            value: "It is stated that we do not allow raiding, those who are responsible will be IP banned, we also have an anti raiding system so don't try to be smart with us.",
            inline: false
        })
        .addFields({
            name: "8 — BE RESPECTFUL",
            value: "Respect is simple etiquette, we would appreciate if you were to treat people as an equal and with respect, who knows, you may be rewarded in the future.",
            inline: false
        })
        .addFields({
            name: "9 — RESPECT STAFF MEMBERS",
            value: "Staff members have their own life and just because they can moderate, doesn't mean they're not human, It would be much appreciated if you were to be nice to them too.",
            inline: false
        })
        .addFields({
            name: "10 — ENGLISH ONLY",
            value: "This is an english only server, anyone who speaks a different language be it casual talk or discriminatory way, you will be muted for 1h.",
            inline: false
        })
        .setImage(`https://media.tenor.com/3CWQ8JyiD0cAAAAC/rules-discord.gif`)
        .setTimestamp()
        .setFooter({
            text: "Made by Xekvern",
        })
        await interaction.reply({ 
            embeds: [embed]
        })
    }
}