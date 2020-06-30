let timesCalled = 0;

let randomNumber = (min, max) => {
    timesCalled++;
    if (timesCalled == 7) {
        console.log(`you called it ${timesCalled} times!`);
        return max;
    } else if (timesCalled == 10) {
        return min;
    }

    console.log(timesCalled);

    return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = randomNumber;