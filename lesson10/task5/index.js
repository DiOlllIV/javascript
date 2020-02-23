const getTotalPrice = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);

    return '$' + Math.floor(sum * 100) / 100;
};

/* const arr = [77.5434, 5.88, .5, 9];
console.log(getTotalPrice(arr)); */