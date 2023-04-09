let userMoney = 100;

let bank = [
    {
        currency: 'usa',
        price:38
    },
    {
        currency: 'eur',
        price:39
    },
    {
        currency: 'zlt',
        price:10
    }
]

let exchangeRates = bank.map(item => {
    let amount = Math.floor(userMoney / item.price); 
    return (`За ${userMoney} грн ви можете отримати ${amount} ${item.currency}`);
});

console.log(exchangeRates);