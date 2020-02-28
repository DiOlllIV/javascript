'use strict';

function sumOfSquares() {

    return [...arguments]
        .reduce((acc, curr) => {
            return acc + curr ** 2;
        }, 0);
};


export { sumOfSquares };