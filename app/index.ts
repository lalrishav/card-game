let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let shuffle = require('shuffle-array')
import {BotConstants} from './constants/bot.constants'
const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api');

app.use(bodyParser.json()) // for parsing application/json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const bot = new TelegramBot(BotConstants.BOT_TOKEN, {
    polling: true
});
bot.setWebHook(BotConstants.PUBLIC_URL + BotConstants.WEBHOOK_URI)


app.post(`/message`, (req:any, res:any) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});