require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 443;
const {TOKEN, SERVER_URL} = process.env;
const telegramApi = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const webhookUrl = SERVER_URL + URI;

const app = express();
app.use(bodyParser.json());

const init = async () => {
  const res = await axios.get(`${telegramApi}/setWebhook?url=${webhookUrl}`)
}

app.post(URI, async (req, res) => {
  const chatId = req.body.message.chat.id;
  const text = req.body.message.text;

  await axios.post(`${telegramApi}/sendMessage`, {
    chat_id: chatId,
    text:  text == 'كسم السيسي' ? 'كسمين أمه' : 'كسم السيسي'
  })
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`SERVER is running on port ${PORT}`);
  init();
});
