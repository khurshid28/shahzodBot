const TelegramBot = require('node-telegram-bot-api');
const token = "5008613414:AAG0z8N4bgA_faBkS_-oTIvUoXt3xNBYQQA";

const bot = new TelegramBot(token, {polling: true});

module.exports={
    bot
}

