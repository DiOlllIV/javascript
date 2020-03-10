function uniqueCount(array) {
    let arrayOfUniques = [];

    for (let i = 0; i < array.length; ++i) {
        arrayOfUniques.push(array[i]);
        for (let j = i + 1; j < array.length; ++j) {

            if (array[j] === array[i]) {
                arrayOfUniques.pop(array[j]);
            }
        }

    }
    return arrayOfUniques.length;

}

/* console.log(uniqueCount([1, 2, 3, 1, 2, 3, 10, 11, 3])); */