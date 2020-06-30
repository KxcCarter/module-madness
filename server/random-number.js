let timesCalled = 0;

let randomNumber = (min, max) => {
    if (timesCalled == 7) {
        console.log(`you called it ${timesCalled} times!`);
    }
    timesCalled++;
    console.log(timesCalled);

    return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = randomNumber;