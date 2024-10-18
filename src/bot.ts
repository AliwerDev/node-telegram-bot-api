// bot.ts
import TelegramBot from "node-telegram-bot-api";
import { handleStartCommand, handleHelpCommand } from "src/controllers/bot.controller";

const bot = new TelegramBot(process.env.BOT_TOKEN as string, { polling: true });

bot.onText(/\/start/, (msg) => {
  handleStartCommand(bot, msg);
});

bot.onText(/\/help/, (msg) => {
  handleHelpCommand(bot, msg);
});

export default bot;
