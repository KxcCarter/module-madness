const randomNumber = require('./random-number');
const dollarConvert = require('./dollar-converter');

let currency = () => {
    let randomDollarAmount = dollarConvert.format(randomNumber(10, 10000));
    return 'Random Dollar Amount: ' + randomDollarAmount;
};
//console.log(currency());

module.exports = currency;