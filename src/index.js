import { getQuote } from "./api.js";
import TelegramApi from "node-telegram-bot-api/lib/telegram.js";
import macd from 'macd';

const token = "2126353435:AAGTvXqHSZv1snj4r2c6LBdKRN2y_183Ids";

const bot = new TelegramApi(token, {polling: true});

const start = async () => {
    // try {
    //     await sequelize.authenticate();
    //     await sequelize.sync();
    // } catch (e) {
    //     console.log(`DB connection error: ${e}`);
    // }

    bot.setMyCommands([
        {command: "/start", description: "Начать"},
        {command: "/info", description: "Информация"},
        {command: "/help", description: "Помощь"}
    ]);

    bot.on("message", async msg => {
        const text = msg.text;
        const username = msg.chat?.username || msg.chat?.first_name;
        const chatId = msg.chat.id;

        getQuote().then(res => {
            // console.log(res.chart, JSON.stringify(res));
            // let macdData = macd(res.chart.indicators[0].quote[0].close);
            bot.sendMessage(chatId, "MACD");
            console.log(JSON.stringify(res.chart.result))
            // bot.sendMessage(chatId, macdData);
        })

        bot.sendMessage(chatId, text);

        try {
            // if(text == "/start") {
            //     return startBot(chatId, text, username);
            // }
            } catch (e) {
            bot.sendMessage(chatId, `Произошла неизвестная ошибка!`);
            console.log(e);
        }
    });

    bot.on("callback_query", async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        // if(data === "stol") {
        //     chats[chatId].blank = {type: 1};
        //     return await bot.sendMessage(chatId, `Ты выбрал тип работы:\nСТАЦИОНАРНАЯ ТОЧКА\nВыбери номер точки на которой ты сегодня работаешь.`, stolDotForm);
        // }
    });

    // const rule = new schedule.RecurrenceRule();
    // rule.hour = 1;
    // rule.minute = 0;

    // const job = schedule.scheduleJob(rule, async function(){
    //     console.log('schedule');
    //     await createXlsxs(860131994)
    //     await createXlsxs(390004844);
    // });
};

// bot start
start();