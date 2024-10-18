// server.ts
import dotenv from "dotenv";
import { connectDB } from "./services/database.service.js";
import bot from "./bot";

const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.development";
dotenv.config({ path: envFile });

(async (): Promise<void> => {
  await connectDB();
  console.log(`Telegram bot is running in ${process.env.NODE_ENV} mode`);
})();
