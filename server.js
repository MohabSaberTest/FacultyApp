const TelegramBots = require('node-telegram-bot-api');
require('dotenv').config()

const token = process.env.TOKEN;

const bot = new TelegramBots(token, {polling: true});


bot.on('message', (msg) => {

const chatId = msg.chat.id;
if(msg.text == 'كسم السيسي'){
    bot.sendMessage(chatId, 'كسمين أمه')
}else{

    bot.sendMessage(chatId, 'كسم السيسي');
}
});