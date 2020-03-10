function includes(array, num) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === num)
            return true;
    }
}

function uniqueCount(array) {
    let uniques = [];

    for (let j = 0; j < array.length; ++j) {

        if (!includes(uniques, array[j])) {
            uniques.push(array[j]);
        }
    }

    return uniques.length;
}

console.log(uniqueCount([1, 2, 3, 1, 2, 3, 10, 11, 3]));