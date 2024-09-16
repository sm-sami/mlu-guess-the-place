import "dotenv/config";

if (!process.env.TOKEN) console.error("Bot requires TOKEN in .env");
if (!process.env.CLIENT_ID) console.error("Bot requires CLIENT_ID in .env");
if (!process.env.GUILD_ID) console.error("Bot requires GUILD_ID in .env");

const token: string = process.env.TOKEN || "";
const clientId: string = process.env.CLIENT_ID || "";
const guildId: string = process.env.GUILD_ID || "";
const moderatorRoleId: string = process.env.MODERATOR_ROLE_ID || "";
const chatGamesRole: string = process.env.CHAT_GAMES_ROLE || "";
const chatGamesCategoryId: string = process.env.CATEGORY_ID || "";
const serverReviveRoleId: string = process.env.SERVER_REVIVE_ROLE || "";
const channelId: string = process.env.GAME_CHANNEL_ID || "";
const countingChannelId: string = process.env.COUNTING_CHANNEL_ID || "";
const dbUri: string = process.env.DB_URI || "";
const dbName: string = process.env.DB_NAME || "";

const iconURL =
  "https://cdn.discordapp.com/attachments/871801727974785055/937070492366561352/outline_place_white_24dp.png";
const gameInstructions = [
  "You have a week to find the city in the image attached below.",
  "You are allowed to guess once per day (resets at 00:00 (12:00 AM) your local time)",
  "Provide a reason why you think it is the city you guess.",
  "Create a ticket and send the answer with a reason (not just that you know, for it to be counted).",
  "A Staff will check the correctness of your answer and award you points.",
  "After you've got the correct answer, do NOT close the thread. DON'T create a ticket if you are not going to make a guess",
];

export {
  token,
  clientId,
  guildId,
  moderatorRoleId,
  chatGamesRole,
  serverReviveRoleId,
  chatGamesCategoryId,
  channelId,
  countingChannelId,
  dbUri,
  dbName,
  iconURL,
  gameInstructions,
};
