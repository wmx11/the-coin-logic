import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js';
import Redis from 'ioredis';
import { DiscordBot, MarketStat, prismaClient } from 'tcl-packages/prismaClient';
import { DISCORD_BOTS_CHANNEL, DISOCRD_BOTS_STATS_CHANNEL, redisConenctionString } from 'tcl-packages/utils/redis';
import toCurrency from 'tcl-packages/utils/toCurrency';
import toLocaleString from 'tcl-packages/utils/toLocaleString';
import { setNickname } from './utils/utils';

const redis = new Redis(redisConenctionString);

redis.subscribe(DISCORD_BOTS_CHANNEL, DISOCRD_BOTS_STATS_CHANNEL, (err) => {
  if (err) {
    console.log('Failed to subscribe', err.message);
  }
});

const setBotData = async (client: Client, bot: DiscordBot, marketStats: MarketStat) => {
  if (!marketStats) {
    return;
  }

  const data = marketStats[bot.tracking] || undefined;
  const nickname = bot.isCurrency ? toCurrency(data)?.toString() : toLocaleString(data)?.toString() || 'Thinking...';
  setNickname(client, bot.botId, nickname);
};

const handleBot = (bot: DiscordBot) => {
  try {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });

    client.once(Events.ClientReady, async (): Promise<void> => {
      console.log(`--- ${bot.name} Online ---`);

      client.user?.setPresence({
        activities: [{ name: bot.presence, type: ActivityType.Watching }],
        status: 'online',
      });

      setBotData(client, bot, null);

      redis.on('message', (channel, message: string) => {
        try {
          if (channel !== DISOCRD_BOTS_STATS_CHANNEL) {
            return;
          }
          const marketStatsMessage = JSON.parse(message) as MarketStat;
          if (marketStatsMessage.projectId === bot.projectId) {
            setBotData(client, bot, marketStatsMessage);
          }
        } catch (error) {
          console.log(error);
        }
      });
    });

    if (!bot.enabled) {
      console.log(`--- ${bot.name} Logging Off ---`);
      return client.destroy();
    }

    return client.login(bot.apiKey);
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  const bots = await prismaClient?.discordBot.findMany({
    where: {
      enabled: true,
    },
  });

  redis.on('message', (channel, message: string) => {
    try {
      if (channel !== DISCORD_BOTS_CHANNEL) {
        return;
      }
      const botMessage = JSON.parse(message) as DiscordBot;
      handleBot(botMessage);
    } catch (error) {
      console.log(error);
    }
  });

  return bots.forEach(handleBot);
};

(() => {
  init();
})();
