let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// console.log(formatter.format(2345));

module.exports = formatter;