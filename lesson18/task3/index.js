function sumOfSquares() {

    return [...arguments].map(num => {
        return num * num;
    }, 0);
};

export { sumOfSquares };