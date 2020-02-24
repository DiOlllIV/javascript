const getRandomNumbers = (length, start, end) => {
    if (Math.floor(start) >= Math.floor(end))
        return null;

    let arr = [];
    arr.length = length;

    return /* Array(length) */ arr.fill().map(num =>
        Math.floor(Math.random() * (start - end + 1) + end));
};

/* console.log(getRandomNumbers(5, 1.4, 7)); */