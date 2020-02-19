function uniqueCount(array) {
    let sumOfDoubles = 0;
    let sumOfUniques = 0;
    for (let i = 0; i <= array.length - 1; ++i) {

        for (let j = i + 1; j < array.length; ++j) {
            if (array[j] === array[i]) {
                sumOfDoubles++;

            }
        }
    }


    return sumOfDoubles;

}

console.log(uniqueCount([1, 2, 1, 2, 4, 5, 5, 6]));