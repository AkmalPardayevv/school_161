// const express = require("express");
// const axios = require("axios");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// // CORS-ni faollashtirish
// app.use(cors());

// // Telegram bot token va chat ID
// const TELEGRAM_BOT_TOKEN = "7957164513:AAEcd09R9qjmh9-APwILsxIBPbIzyQUtqrE";
// const TELEGRAM_CHAT_ID = "7141118349";

// // Middleware
// app.use(bodyParser.json());

// // API endpoint
// app.post("/send-message", async (req, res) => {
//   const { email, message } = req.body;

//   try {
//     // Telegram botga xabar yuborish
//     const telegramMessage = `Email: ${email}\nMessage: ${message}`;
    
//     await axios.post(
//       `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
//       {
//         chat_id: TELEGRAM_CHAT_ID,
//         text: telegramMessage,
//       }
//     );

//     // Yuborilgan xabarni muvaffaqiyatli tarzda yubordik
//     res.status(200).send({ message: "Message sent successfully" });
//   } catch (error) {
//     console.error("Error sending message", error);
//     res.status(500).send({ message: "Failed to send message" });
//   }
// });

// // Serverni ishga tushirish
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

// Bot tokenni BotFather'dan olingan token bilan almashtiring
const bot = new TelegramBot('7957164513:AAEcd09R9qjmh9-APwILsxIBPbIzyQUtqrE', { polling: true });

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Telegram bot orqali xabar yuborish
const sendTelegramMessage = (email, message) => {
  const chatId = '7141118349'; // Sizning Telegram chat ID'niz

  const msg = `New message from ${email}: \n\n${message}`;
  bot.sendMessage(chatId, msg);
};

// Form yuborilganda
app.post('/send-message', (req, res) => {
  const { email, message } = req.body;

  // Telegramga xabar yuborish
  sendTelegramMessage(email, message);

  // Clientga muvaffaqiyatli yuborilganligini bildirish
  res.status(200).send('Message Sent!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
