import fetch from "node-fetch";

export const getQuote = () => {
    return fetch('https://query1.finance.yahoo.com/v8/finance/chart/AAPL?symbol=AAPL&modules=MACD&period1=1616087333&period2=1637687255&interval=1d&includePrePost=true')
        .then(res => res.json())
        .catch(error => error)
}