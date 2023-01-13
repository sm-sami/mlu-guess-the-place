import { getCookieCount, giveCookie } from "../programs/cookie";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { createCookieEmbed } from "../utils/create";
import { CookieUser } from "../programs/cookie/schema";

export = {
  data: new SlashCommandBuilder()
    .setName("cookie")
    .setDescription("To give someone a cookie")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("give")
        .setDescription("To give someone a cookie")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("The user to give a cookie to")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("count")
        .setDescription("To get the number of cookies a user has")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("The user for whom to get the cookie count")
        )
    ),

  async handle(interaction: ChatInputCommandInteraction) {
    const subcommand = interaction.options.getSubcommand();

    if (subcommand === "give") {
      const user = interaction.options.getUser("user");

      if (user) {
        const cookieCount = (await giveCookie(user)) ?? 0;

        const cookieEmbed = createCookieEmbed(user, cookieCount);
        await interaction.reply({
          content: `Gave 1 cookie to ${user.username}`,
          embeds: [cookieEmbed],
        });
      }
    } else if (subcommand === "count") {
      const user = interaction.options.getUser("user") ?? interaction.user;

      const cookieCount = await getCookieCount(user.id);

      const cookieEmbed = createCookieEmbed(user, cookieCount);
      await interaction.reply({ embeds: [cookieEmbed] });
    }
  },
};
