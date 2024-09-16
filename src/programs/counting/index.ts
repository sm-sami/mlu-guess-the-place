import { Message, userMention } from "discord.js";

import { settings } from "../settings";

let lastCount = 0;
let lastCountUserId = "";

export const count = async (message: Message) => {
  const parsedCount = parseInt(message.content);
  if (parsedCount || settings.isNumbersOnlyEnabled) {
    const currentCount = parsedCount;
    if (isValidCount(currentCount, message.author.id)) {
      lastCount = currentCount;
      lastCountUserId = message.author.id;
      await message.react("✅");
    } else {
      await message.react("❌");
      lastCount = 0;
      await message.channel.send(
        `${userMention(
          message.author.id
        )} made a mistake. Counting has been reset. The next number is 1`
      );
    }
  }
};

const isValidCount = (currentCount: number, currentCountUserId: string) => {
  return (
    currentCount === lastCount + 1 && lastCountUserId !== currentCountUserId
  );
};
