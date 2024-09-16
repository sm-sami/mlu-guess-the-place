import { ChannelType, Message } from "discord.js";

import { getReplyToChatTrigger } from "../programs/triggers";
import { count } from "../programs/counting";
import { countingChannelId } from "../utils/constants";

export const handleMessageCreate = async (message: Message) => {
  if (message.author.bot) return;

  switch (message.channel.type) {
    case ChannelType.GuildText:
      await handleGuildTextMessage(message);
      break;
  }
};

const handleGuildTextMessage = async (message: Message) => {
  const response = await getReplyToChatTrigger(message);
  if (response) {
    await message.reply(response);
    return;
  }

  if (message.channel.id === countingChannelId) {
    await count(message);
  }
};
