const superRound = (number, rounding) => {
    /* let numRound = 1;

    for (let i = 1; i <= rounding; i++) {
        numRound *= 10;
    } */
    let numRound = Math.pow(10, rounding);

    return [
        Math.floor(number * numRound) / numRound,
        Math.round(number * numRound) / numRound,
        Math.ceil(number * numRound) / numRound,
        Math.trunc(number * numRound) / numRound,
        Number(number.toFixed(rounding))

    ];
};

/* console.log(superRound(2.345, 2)); */