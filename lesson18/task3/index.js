'use strict';

function sumOfSquares() {

    return [...arguments]
        .reduce((acc, curr) =>
            (acc + curr ** 2));
};


export { sumOfSquares };