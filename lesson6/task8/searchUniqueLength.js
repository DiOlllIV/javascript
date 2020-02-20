function searchUnique(array, num) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === num)
            return true;
    }
}

function uniqueCount(array) {
    let arrayOfUniques = [];

    for (let j = 0; j < array.length; ++j) {

        if (!searchUnique(arrayOfUniques, array[j])) {
            arrayOfUniques.push(array[j]);
        }
    }

    return arrayOfUniques.length;
}

console.log(uniqueCount([1, 2, 3, 1, 2, 3, 10, 11, 3]));