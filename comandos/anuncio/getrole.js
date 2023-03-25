const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder, ModalBuilder,ActionRowBuilder, TextInputBuilder, TextInputStyle, Embedbuilder, PermissionFlagsBits, Embed, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('autorol')
		.setDescription('Crea un autorol.')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),


	async execute(interaction) {
			const modal = new ModalBuilder()
				.setCustomId('cautorole')
				.setTitle('Crea un auto role.');


			const titleinput = new TextInputBuilder()
				.setCustomId('titleinput')
				.setLabel("Coloca un Titulo")
				.setStyle(TextInputStyle.Short)
				.setMaxLength(20);

			const descinput = new TextInputBuilder()
				.setCustomId('descinput')
				.setLabel("Coloca una pequeña descripcion.")
				.setMaxLength(500)
				.setStyle(TextInputStyle.Paragraph);

			const roleinput = new TextInputBuilder()
				.setCustomId('roleinput')
				.setLabel("Coloca el ID del rol")
				.setStyle(TextInputStyle.Short)
				.setMaxLength(50)
				.setRequired(false);

			const firstActionRow = new ActionRowBuilder().addComponents(titleinput);
			const secondActionRow = new ActionRowBuilder().addComponents(descinput);
			const thirdActionRow = new ActionRowBuilder().addComponents(roleinput);

			modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

			await interaction.showModal(modal);
		
		},
		
};
