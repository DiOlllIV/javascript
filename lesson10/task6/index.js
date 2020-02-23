const getRandomNumbers = (length, start, end) => {
    if (Math.floor(start) >= Math.floor(end))
        return null;

    const arr = [];
    arr.length = length;

    return arr.fill().map(num =>
        Math.floor(Math.random() * (end - start) + start));
};


/* console.log(getRandomNumbers(10, 1.4, 14.5)); */