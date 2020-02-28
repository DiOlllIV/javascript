function sumOfSquares() {

    return [...arguments]
        .map(num => num * num)
        .reduce((acc, curr) =>
            (acc + curr));
};


export { sumOfSquares };