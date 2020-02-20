function uniqueCount(array) {
    let sumOfDoubles = 0;
    let arrayOfUniques = [];

    for (let i = 0; i <= array.length; ++i) {
        arrayOfUniques.push(i);
        for (let j = i + 1; j < array.length; ++j) {

            if (array[j] === array[i]) {
                arrayOfUniques.pop(j);
            }
        }

    }
    return arrayOfUniques.length;

}

console.log(uniqueCount([1, 2, 3, 1, 2, 3, 10, 11, 3]));