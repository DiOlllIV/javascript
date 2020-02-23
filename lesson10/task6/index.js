const getRandomNumbers = (length, start, end) => {
    if (Math.floor(start) >= Math.floor(end))
        return null;

    const arr = [];
    arr.length = length;

    return arr.fill().map(num =>
        Math.floor(Math.random() * (end - start + 1) + start));
};


console.log(getRandomNumbers(5, 1.4, 7));